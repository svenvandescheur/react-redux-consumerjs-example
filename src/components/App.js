import React from 'react';
import Header from './Header';
import PostListContainer from '../containers/PostListContainer';
import PostsFetchContainer from '../containers/PostsFetchContainer';
import PostFetchContainer from '../containers/PostFetchContainer';


const App = () => (
  <section>
    <Header>React/Redux/Consumerjs example</Header>
    Fetch all posts<PostsFetchContainer>Fetch</PostsFetchContainer>
    <br />
    <PostFetchContainer buttonText="Fetch">Fetch post by id</PostFetchContainer>
    <PostListContainer />
  </section>
)

export default App;