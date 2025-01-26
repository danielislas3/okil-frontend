interface TrafficSource {
  source: string;
  user_agent: string;
  ip_address: string;
  visit_count: number;
}
// @ts-nocheck
export const useTrafficLogger = () => {
  const supabase = useSupabaseClient();
  const route = useRoute();

  const logSource = async (): Promise<void> => {
    // Extraer el parámetro "source" del router
    const source = (route.query.source as string) || 'direct';
    const userAgent = navigator.userAgent;

    // Obtener la dirección IP del usuario
    const ip = await fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => data.ip)
      .catch(() => 'unknown');

    try {
      // Verificar si ya existe un registro con esta IP y fuente
      const { data: existingLog, error: fetchError } = await supabase
        .from('traffic_sources') // Tipamos explícitamente la tabla
        .select('*')
        .eq('ip_address', ip)
        .eq('source', source)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        console.error('Error verificando registros:', fetchError.message);
        return;
      }

      if (existingLog) {
        // Si ya existe, incrementar el contador de visitas
        const { error: updateError } = await supabase
          .from('traffic_sources')
          .update({ visit_count: existingLog.visit_count + 1 })
          .eq('ip_address', ip)
          .eq('source', source);

        if (updateError) {
          console.error('Error actualizando el contador de visitas:', updateError.message);
          return;
        }

        console.log(
          `Visita registrada. Total de visitas para ${source}: ${
            existingLog.visit_count + 1
          }`
        );
      } else {
        // Si no existe, insertar un nuevo registro
        const newLog: TrafficSource = {
          source,
          user_agent: userAgent,
          ip_address: ip,
          visit_count: 1, // Inicia con 1 visita
        };

        const { error: insertError } = await supabase
          .from<TrafficSource>('traffic_sources')
          .insert([newLog]);

        if (insertError) {
          console.error('Error registrando la fuente:', insertError.message);
          return;
        }

        console.log('Nueva fuente registrada con éxito');
      }
    } catch (err) {
      console.error('Error general en logSource:', err);
    }
  };

  return {
    logSource,
  };
};