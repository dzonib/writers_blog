import React, {Fragment} from 'react';
import {Link, Route, Redirect} from 'react-router-dom'
import Writer from './Writer/Index'
import NotFound from '../Errors/404'

export default({Error, match: {
    url
  }, writers}) => <Fragment>
    <ul>
      {writers.map(({id, name}) => <li key={id}>
        <Link to={`${url}/${id}`}>{name}</Link>
      </li>)}
    </ul>

    <Route exact path={url} render={() => <h3>Please select Author from above</h3>}/>
    <Route
      path={`${url}/:writerId`}
      render={({match}) => {
        const writer = writers.find(writer => writer.id === match.params.writerId);

        if (!writer) {
          return <NotFound />
        }

        return <Writer {...writer}/>
      }}/>
  </Fragment>