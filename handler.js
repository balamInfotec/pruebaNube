'use strict';

module.exports.getPrueba = async (event) => {
  console.log("Prueba: ", event)
  console.log("Compulsa")
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Esto es un get Hola mundo INE',
        input: event,
      },
      null,
      2
    ),
  };
};


