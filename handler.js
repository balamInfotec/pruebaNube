'use strict';

module.exports.getPrueba = async (event) => {
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

module.exports.postPrueba = async (event) => {
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
