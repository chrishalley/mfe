import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import { SignIn } from '../components/signin'
import { SignUp } from '../components/signup'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au'
})

export const App = ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route
              path="/auth/signin"
              component={() => <SignIn onSignIn={onSignIn} />}
            />
            <Route
              path="/auth/signup"
              component={() => <SignUp onSignIn={onSignIn} />}
            />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}