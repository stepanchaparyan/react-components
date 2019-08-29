var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var Input = function Input(_ref) {
  var id = _ref.id,
      className = _ref.className,
      label = _ref.label,
      error = _ref.error,
      attrs = _objectWithoutProperties(_ref, ['id', 'className', 'label', 'error']);

  var classes = classNames('input', className, { error: error });

  return React.createElement(
    'div',
    { className: 'inputWrapper' },
    React.createElement(
      'div',
      { className: 'labelsWrapper' },
      label && React.createElement(
        'label',
        { className: 'inputLabel', htmlFor: id },
        label
      ),
      attrs.required && React.createElement(
        'span',
        { className: 'inputRequired' },
        'Required'
      )
    ),
    React.createElement('input', _extends({
      name: id,
      id: id,
      className: classes
    }, attrs)),
    error && React.createElement(
      'span',
      { className: 'inputError' },
      error
    )
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string
};

Input.defaultProps = {
  className: '',
  label: '',
  error: ''
};

export default Input;