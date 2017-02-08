import React from 'react';
import Button from '../components/Button';


class Post extends React.Component {
    render() {
        return (
            <article className="body" onBlur={ this.updatePost.bind(this) }>
                <span className="post__id">#{this.props.post.id}</span><Button onClick={ this.props.onDelete.bind(this, this.props.post) }>Delete</Button>
                <h1 className="post__title" contentEditable ref={ (node) => { this.elementTitle = node } } suppressContentEditableWarning>{this.props.post.title || 'Geen titel'}</h1>
                <p className="post__body" contentEditable ref={ (node) => { this.elementBody = node } } suppressContentEditableWarning>{this.props.post.body || 'Geen inhoud'}</p>
            </article>
        )
    }

    updatePost(e) {
        let data = {
            title: this.elementTitle.innerText,
            body: this.elementBody.innerText,
        }

        this.props.onChange(this.props.post, data);
    }
}


export default Post;