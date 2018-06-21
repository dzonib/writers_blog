import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'
import Writers from './Writers/Index'
import NotFound from './Errors/404'

export default class App extends Component {

  state = {
    writers: []
  }

  async componentDidMount() {
    const writers = await(await fetch('http://localhost:3004/writers')).json()

    this.setState(() => ({writers}))

  }

  render() {

    const {writers} = this.state

    return <BrowserRouter>
      <Fragment>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/writers">Writers</NavLink>
        </ul>
        <hr/>
        <Switch>
          <Route
            path="/"
            render={() => <Fragment>
            <h1>This is home yo</h1>
          </Fragment>}
            exact/>
          <Route
            path="/writers"
            render={(props) => <Writers {...props} writers={writers}/>}/>
          <Route
            component={NotFound}
          />  
        </Switch>
      </Fragment>
    </BrowserRouter>
  }
}
