var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      visible: false
    }, _this.show = function () {
      _this.setVisibility(true);
    }, _this.hide = function () {
      _this.setVisibility(false);
    }, _this.setVisibility = function (visible) {
      _this.setState({ visible: visible });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tooltip, [{
    key: 'render',
    value: function render() {
      var visible = this.state.visible;
      var _props = this.props,
          children = _props.children,
          content = _props.content,
          style = _props.style,
          position = _props.position;


      var classes = classNames('tooltip', position);

      return React.createElement(
        'span',
        { className: 'tooltipWrapper' },
        visible && React.createElement(
          'span',
          { style: style, className: classes },
          content
        ),
        React.createElement(
          'span',
          {
            className: 'targetElement',
            onMouseEnter: this.show,
            onMouseLeave: this.hide
          },
          children
        )
      );
    }
  }]);

  return Tooltip;
}(Component);

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  style: PropTypes.objectOf(PropTypes.string)
};
Tooltip.defaultProps = {
  content: 'Tooltip content',
  style: {},
  position: 'top'
};


export default Tooltip;