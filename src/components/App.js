import React from 'react';
import Header from './Header';
import PostsFetchContainer from '../containers/PostsFetchContainer';
import PostFetchContainer from '../containers/PostFetchContainer';
import PostAddContainer from '../containers/PostAddContainer';
import PostListContainer from '../containers/PostListContainer';


const App = () => (
  <section>
    <Header>React/Redux/Consumerjs example</Header>
    Fetch all posts<PostsFetchContainer>Fetch</PostsFetchContainer>
    <br />
    <PostFetchContainer buttonText="Fetch">Fetch post by id</PostFetchContainer>
    <br />
    Add new post<PostAddContainer>Add</PostAddContainer>
    <hr />
    <PostListContainer />
  </section>
)

export default App;