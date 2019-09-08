import React from 'react';
import { PulseLoader, BeatLoader, RotateLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var Spinner = function Spinner(_ref) {
    var loaderType = _ref.loaderType,
        className = _ref.className,
        size = _ref.size,
        color = _ref.color,
        margin = _ref.margin;


    var classes = classNames(className);

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
};

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