var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var ListGroupItem = function ListGroupItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag,
      disabled = _ref.disabled,
      active = _ref.active,
      attrs = _objectWithoutProperties(_ref, ['children', 'className', 'tag', 'disabled', 'active']);

  var classes = classNames('list-group-item', className, { disabled: disabled }, { active: active });

  if (attrs.href && Tag === 'li') {
    Tag = 'a';
  }

  return React.createElement(
    Tag,
    _extends({ className: classes }, attrs),
    children
  );
};

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  active: PropTypes.bool
};

ListGroupItem.defaultProps = {
  children: null,
  className: '',
  tag: 'li',
  disabled: false,
  active: false
};

export default ListGroupItem;