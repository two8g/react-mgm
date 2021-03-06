import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Mask from '../mask/index';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = ::this.handleChange;
    }

    render() {
        const thisProps = this.props;
        const {
            show,
            left,
            bottom,
            width,
            height,
            opacity,
            autoHeight,
            className,
            style,
            ...rest
        } = thisProps;
        const cn = classNames('popup', {
            active: show,
            'popup-left': left,
            'popup-bottom': bottom,
            'popup-bottom-auto-height': autoHeight
        }, className);

        let s = Object.assign({}, style);
        if (left && width) {
            s.width = width;
        } else if (bottom) {
            s.height = height;
        }

        return (
            <div className="popup-wrap">
                <Mask show={thisProps.show} opacity={opacity || 0.1} onClick={this.handleChange}/>
                <div {...rest} className={cn} style={s}>
                    <div className="popup-content">
                        {thisProps.children}
                    </div>
                </div>
            </div>
        );
    }

    handleChange(e) {
        e.preventDefault();
        this.props.onChange(!this.props.show);
    }
}

Popup.defaultProps = {
    show: false,
    onChange: () => {
    }
};

Popup.propTypes = {
    show: PropTypes.bool,
    onChange: PropTypes.func,
    left: PropTypes.bool,
    bottom: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    opacity: PropTypes.number,
    autoHeight: PropTypes.bool // 只bottom:true 有效
};

export default Popup;
