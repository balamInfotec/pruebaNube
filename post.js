module.exports.postPrueba = async (event) => {
  console.log("Compulsa post prueba")
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Esto es un post de prueba INE',
          input: event,
        },
        null,
        2
      ),
    };
  };