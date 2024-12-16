import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ car: { name, year, model, price } }) => {
  return (
    <div className="bg-white rounded-lg m-4 p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
      <p className="text-sm text-gray-600">{year} - {model}</p>
      <p className="text-lg text-right text-gray-800 font-semibold">$ {price.toLocaleString()}</p>
    </div>
  );
};

// Validação de propriedades
Card.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

// Valores padrão para propriedades (se alguma não for passada)
Card.defaultProps = {
  car: {
    name: 'Unknown Car',
    year: 'Unknown Year',
    model: 'Unknown Model',
    price: 0,
  },
};

export default Card;