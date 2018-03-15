import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import Dates from './Dates'
import Numbers from './Numbers'

const Menu = () => (
  <div>
    <div>
      <Link to="/numbers">Checkout some numbers!</Link>
    </div>
    <br />
    <div>
      <Link to="/dates">Checkout some dates!</Link>
    </div>
  </div>
)

const App = () => (
  <Switch>
    <Route exact path="/" component={Menu} />
    <Route path="/dates" component={Dates} />
    <Route path="/numbers" component={Numbers} />
  </Switch>
)

export default App;
