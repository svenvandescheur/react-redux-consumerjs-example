import React from 'react';
import Button from './Button';


class PostFetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: 1 };
    }

    render() {
        return (
            <span>
                { this.props.children } - { this.state.id }
                <input min="1" onChange={ this.idChanged.bind(this) } placeholder="Post id" type="number" />
                <Button onClick={() => this.props.onClick(this.state.id)}>{ this.props.buttonText }</Button>
            </span>

        )
    }

    idChanged(e) {
        this.setState({ id: e.target.value} );
    }
}


export default PostFetch;