import React from 'react';
import classNames from 'classnames';

class Textarea extends React.Component {
    static defaultProps = {
        wrapProps: {}
    };

    render() {
        const cn = classNames('textarea-adapter', this.props.wrapProps.className);
        const {wrapProps, ...rest} = this.props;
        return (
            <div {...wrapProps} className={cn}>
                <pre>{this.props.value}</pre>
                <textarea {...rest} className={classNames("weui_textarea", this.props.className)}></textarea>
            </div>
        );
    }
}

export default Textarea;
