import React from 'react';
import classNames from 'classnames';
import pureRenderDecorator from '../../pure.render.decorator';

@pureRenderDecorator
class Loading extends React.Component {
    render() {
        const {className, ...rest} = this.props;
        return (
            <div {...rest} className={classNames("loading", className)}>
                <div className="loading-inner">
                    <div className="weui_loading_leaf weui_loading_leaf_0"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_1"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_2"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_3"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_4"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_5"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_6"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_7"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_8"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_9"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_10"></div>
                    <div className="weui_loading_leaf weui_loading_leaf_11"></div>
                </div>
            </div>
        );
    }
}

export default Loading;