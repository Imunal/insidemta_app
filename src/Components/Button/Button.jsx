import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, isLoading, children }) => (
  <button className="btn btn__dark btn-lg btn-block" onClick={onClick}>
    {isLoading ? (
      <>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span className="visually-hidden">Wczytywanie...</span>
      </>
    ) : (
      children
    )}
  </button>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.object,
};
