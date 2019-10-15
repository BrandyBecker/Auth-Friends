import React from 'react';
import { Route, Redirect} from 'react-router-dom';
/*
* Create a `<PrivateRoute />` component to protect your other routes. 
It should check localStorage for a token, and redirect the user to your login route if there is not a token.
  ---------------------------------------------------------
  PrivateRoute Rules:
  1. It has the same API as <Route />.

  2. It renders a <Route /> and passes all the props 
   through to it.

  3. It checks if the user is authenticated, if they are, 
   it renders the “component” prop. If not, it redirects 
   the user to /login.
  ---------------------------------------------------------
*/

const PrivateRoute = ({ component: Component, ...rest }) => {
    // const Component = props.component;
    return (
      <Route
        {...rest}
        render={props => {
          if (localStorage.getItem("token")) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/" />;
          }
        }}
      />
    );
  };
  
  export default PrivateRoute;
  