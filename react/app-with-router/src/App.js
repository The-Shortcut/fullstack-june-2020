import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import Category from './Category'
import Products from './Products'
import Login, {fakeAuth} from './Login'


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
  )

const Admin = ( {match}) => {
  return (
    <div>
    <h2>Welcome Admin</h2>
  </div>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin Area</Link>
          </li>
        </ul>
      </nav>

      {/* Route components rendered if following path prop matches URL */}
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
