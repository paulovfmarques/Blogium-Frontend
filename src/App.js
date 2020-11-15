import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './assets/styles/globals';
import Header from './components/shared/Header';
import Home from './pages/Home';
import PostShow from './pages/PostShow';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

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

const BlogShow = () => <h1>Blog show</h1>;
const PostEdit = () => <h1>post edit</h1>;
