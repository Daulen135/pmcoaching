import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './login'
import Signup from './signup'
import Dashboard from './dashboard'
import LoggedLayout from './loggedin'
import Profile from './profile'
import Projects from './Projects'
import Project from './Project'
import Leaderships from './Leaderships'
import Leadership from './Leadership'
import Blog from './Blog'

export default function index() {
  return (
    <>

      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <LoggedLayout>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/project/:pid">
            <Project />
          </Route>
          <Route path="/leaderships">
            <Leaderships />
          </Route>
          <Route path="/leadership/:lid">
            <Leadership />
          </Route>
          <Route path="/blogs">
            <Blog />
          </Route>
        </LoggedLayout>
      </Switch>

    </>
  );
}

