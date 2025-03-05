import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    // Leer el cuerpo de la solicitud
    const body = await readBody(event);

    // Log para verificar los datos
    console.log('Webhook recibido:', JSON.stringify(body, null, 2));

    // Responder a Loyverse
    return {
      success: true,
      message: 'Webhook recibido correctamente',
    };
  } catch (error) {
    console.error('Error procesando el webhook:', error);

    // Responder con error
    throw createError({
      statusCode: 500,
      statusMessage: 'Error procesando el webhook',
    });
  }
});