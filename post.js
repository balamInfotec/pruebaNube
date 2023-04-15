module.exports.postPrueba = async (event, context) => {
    console.log("Propiedad: ", context.functionName)
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Esto es un post de prueba INE',
          contexto: context
        },
        null,
        2
      ),
    };
  };