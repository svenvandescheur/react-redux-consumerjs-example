import { CrudConsumer, CrudConsumerObject } from 'consumerjs';


class Post extends CrudConsumerObject {}


class PostConsumer extends CrudConsumer {
    constructor(endpoint='https://jsonplaceholder.typicode.com/posts/', objectClass=Post) {
        super(endpoint, objectClass);
    }
;}


export default PostConsumer;