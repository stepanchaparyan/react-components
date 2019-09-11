var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      className = _ref.className,
      width = _ref.width,
      height = _ref.height,
      circle = _ref.circle,
      attrs = _objectWithoutProperties(_ref, ['src', 'alt', 'className', 'width', 'height', 'circle']);

  var classes = classNames(className, { circle: circle });

  // if (!src) {
  //   src = `https://via.placeholder.com/${width}x${height}`;
  // }

  return React.createElement('img', _extends({
    src: src,
    alt: alt,
    className: classes,
    width: width,
    height: height
  }, attrs));
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  circle: PropTypes.bool,
  className: PropTypes.string
};

Image.defaultProps = {
  src: null,
  alt: 'image',
  width: 100,
  height: 100,
  circle: false,
  className: ''
};

export default Image;