var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var Icon = function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      size = _ref.size,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      attrs = _objectWithoutProperties(_ref, ['name', 'className', 'size', 'onClick', 'disabled']);

  var classes = classNames('styleFa', 'fa', 'fa-' + name, { func: onClick }, { disabled: disabled }, className);

  var elemSize = size ? { fontSize: size + 'rem' } : null;

  return React.createElement('i', _extends({}, attrs, {
    className: classes,
    onClick: disabled ? null : onClick,
    style: elemSize
  }));
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Icon.defaultProps = {
  name: '',
  className: '',
  size: null,
  onClick: null,
  disabled: false
};

export default Icon;