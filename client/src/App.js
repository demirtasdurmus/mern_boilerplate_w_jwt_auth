import React from 'react';
import Landing from "./pages/Landing";
import Sample from "./pages/Sample";
import EditSample from "./pages/EditSample";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SecretPage from './pages/SecretPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./routers/PrivateRoute";


export default function App() {

  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Landing} />
          <Route path="/sample" exact={true} component={Sample} />
          <Route path="/edit-sample/:id" exact={true} component={EditSample} />
          <Route path="/register" exact={true} component={Register} />
          <Route path="/login" exact={true} component={Login} />
          <PrivateRoute path="/secret" exact={true} component={SecretPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
