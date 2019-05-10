import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import {
  dynamicWrap,
} from './common/utils.js'

const Index = dynamicWrap(() => import(
  /* webpackChunkName: "router_index" */ 
  './routes/index'
))
const About = dynamicWrap(() => import(
  /* webpackChunkName: "router_about" */
  './routes/about'
))

export default () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        <Route
          path="/" exact
          component={Index}
        />
        <Route
          path="/about/"
          component={About}
        />
      </div>
    </Router>
  );
}
