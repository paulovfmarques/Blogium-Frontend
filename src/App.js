import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/shared/Header';
import Home from './pages/Home';
import GlobalStyle from './assets/styles/globals';

export default function App() {
  return (
    <Router>
      <>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/blogs/:blogId/posts/:postId/edit" component={PostEdit} />
          <Route path="/blogs/:blogId/posts/:postId" component={PostShow} />
          <Route path="/blogs/:blogId" component={BlogShow} />
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={SignIn} />
          <Route path="/" component={Home} />
        </Switch>
      </>
    </Router>
  );
}

const SignUp = () => <h1>sign up</h1>;
const SignIn = () => <h1>sign in</h1>;
const BlogShow = () => <h1>Blog show</h1>;
const PostShow = () => <h1>post show</h1>;
const PostEdit = () => <h1>post edit</h1>;
