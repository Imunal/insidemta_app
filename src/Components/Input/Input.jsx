import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  inputType,
  inputValue,
  inputName,
  inputOnChange,
  inputPlaceHolder,
  inputDisabled,
  inputLabel,
  inputRequired,
}) => {
  return (
    <div className="form-floating">
      <input
        type={inputType}
        className="form-control"
        id={inputName}
        value={inputValue}
        onChange={inputOnChange}
        placeholder={inputPlaceHolder}
        disabled={inputDisabled}
        required={inputRequired}
      />
      <label htmlFor={inputName}>{inputLabel}</label>
    </div>
  );
};

export default Input;

Input.propTypes = {
  inputType: PropTypes.string,
  inputValue: PropTypes.any,
  inputName: PropTypes.string,
  inputOnChange: PropTypes.func,
  inputPlaceHolder: PropTypes.string,
  inputDisabled: PropTypes.bool,
  inputLabel: PropTypes.string,
  inputRequired: PropTypes.bool,
};
