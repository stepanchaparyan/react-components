import React, { Component } from 'react';
import { PulseLoader, BeatLoader, RotateLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Spinner extends Component {
    static propTypes = {
        className: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string,
        margin: PropTypes.string,
        loaderType: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
          ]),
    }
    
    static defaultProps = {
        color: '#17a2b8',
        margin: '5px',
        size: 20,
        loaderType: PulseLoader
    }

    render() {
        const { loaderType, className, size, color, margin } = this.props;
        
        const classes = classNames(
            'spinner',
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
}

export default Spinner;
