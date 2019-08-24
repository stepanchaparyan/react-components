var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      className = _ref.className,
      disabled = _ref.disabled,
      active = _ref.active,
      attrs = _objectWithoutProperties(_ref, ['children', 'onClick', 'className', 'disabled', 'active']);

  var onClickAction = function onClickAction(e) {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  var classes = classNames('bttn', className, { active: active });

  var Tag = attrs.href ? 'a' : 'button';

  return React.createElement(
    Tag,
    _extends({
      className: classes,
      disabled: disabled,
      onClick: onClickAction
    }, attrs),
    children
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool
};

Button.defaultProps = {
  children: 'Default button',
  onClick: function onClick() {},
  className: '',
  disabled: false,
  active: false
};

export default Button;