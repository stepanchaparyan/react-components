var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { PulseLoader, BeatLoader, RotateLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var Spinner = function (_Component) {
    _inherits(Spinner, _Component);

    function Spinner() {
        _classCallCheck(this, Spinner);

        return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
    }

    _createClass(Spinner, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                loaderType = _props.loaderType,
                className = _props.className,
                size = _props.size,
                color = _props.color,
                margin = _props.margin;


            var classes = classNames('spinner', className);

            var Loader = PulseLoader;

            if (loaderType == 'BeatLoader') {
                Loader = BeatLoader;
            } else if (loaderType == 'RotateLoader') {
                Loader = RotateLoader;
            }

            return React.createElement(
                'div',
                { className: classes },
                React.createElement(Loader, {
                    sizeUnit: 'px',
                    size: size,
                    margin: margin,
                    color: color
                })
            );
        }
    }]);

    return Spinner;
}(Component);

Spinner.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    margin: PropTypes.string,
    loaderType: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};
Spinner.defaultProps = {
    color: '#17a2b8',
    margin: '5px',
    size: 20,
    loaderType: PulseLoader
};


export default Spinner;