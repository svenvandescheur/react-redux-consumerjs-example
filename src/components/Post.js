import React from 'react';


class Post extends React.Component {
    render() {
        return (
            <article className="body" onBlur={ this.updatePost.bind(this) }>
                <h1 className="post__title" contentEditable ref={ (node) => { this.elementTitle = node } } suppressContentEditableWarning>{this.props.post.title}</h1>
                <p className="post__body" contentEditable ref={ (node) => { this.elementBody = node } } suppressContentEditableWarning>{this.props.post.body}</p>
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