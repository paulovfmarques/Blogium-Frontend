import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './assets/styles/globals';
import Header from './components/shared/Header';
import Home from './pages/Home';
import PostShow from './pages/PostShow';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ProfileEdit from './pages/ProfileEdit';
import { UserProvider } from './contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route path="/users/:usersId/posts/:postId/edit" component={PostEdit} />
            <Route path="/users/:userId/posts/:postId" component={PostShow} />
            <Route path="/users/:userId" component={BlogShow} />
            <Route path="/new-story" component={NewStory} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/edit" component={ProfileEdit} />
            <Route path="/" component={Home} />
          </Switch>
        </>
      </Router>
    </UserProvider>
  );
}

const NewStory = () => <h1>New Story</h1>;
const BlogShow = () => <h1>Blog show</h1>;
const PostEdit = () => <h1>post edit</h1>;
