import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price }) => (
  <div className="price-wrapper">
    $
    {price}
  </div>
);

Price.propTypes = {
  price: PropTypes.number,
};

Price.defaultProps = {
  price: 0,
};

export default Price;