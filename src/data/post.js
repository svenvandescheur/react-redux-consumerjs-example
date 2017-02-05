import { CrudConsumer, CrudConsumerObject } from 'consumerjs';


class Post extends CrudConsumerObject {}


class PostConsumer extends CrudConsumer {
    constructor(endpoint='http://localhost:1234/posts/', objectClass=Post) {
        super(endpoint, objectClass);
    }
;}


export default PostConsumer;