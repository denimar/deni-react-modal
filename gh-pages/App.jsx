import React from 'react'
import ReactDOM from 'react-dom'
import IndexPage from './IndexPage'
import Examples from './examples/components/Examples'
import { HashRouter, Switch, Route } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div className='app-container'>
        <Switch>
          <Route exact path='/' component={ IndexPage } />
          <Route path="/examples" component={ Examples } />
        </Switch>
      </div>
    )
  }

}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
)
