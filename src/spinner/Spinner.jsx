import React from 'react';
import { PulseLoader, BeatLoader, RotateLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Spinner = ({
    loaderType, className, size, color, margin
}) => {

    const classes = classNames(
        className
    );

    let Loader = PulseLoader;

    if (loaderType == 'BeatLoader') {
        Loader = BeatLoader;
    } else if (loaderType == 'RotateLoader') {
        Loader = RotateLoader;
    }

    return (
        <div className={classes}>
            <Loader               
                sizeUnit={'px'}
                size={size}
                margin={margin}
                color={color}
            />
        </div>
    );
  }

    Spinner.propTypes = {
        className: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string,
        margin: PropTypes.string,
        loaderType: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
            ]),
        };
        
        Spinner.defaultProps = {
        color: '#17a2b8',
        margin: '5px',
        size: 20,
        loaderType: PulseLoader
        };

export default Spinner;
