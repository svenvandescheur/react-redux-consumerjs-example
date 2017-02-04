import React from 'react';
import Header from './Header';
import PostListContainer from '../containers/PostListContainer';
import PostsFetchContainer from '../containers/PostsFetchContainer';


const App = () => (
  <section>
    <Header>React/Redux/Consumerjs example</Header>
    <PostListContainer />
    <PostsFetchContainer>Fetch posts</PostsFetchContainer>
  </section>
)

export default App;