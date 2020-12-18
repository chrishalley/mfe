import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { createBrowserHistory } from 'history'

import { Header } from './components/header'
import { Progress } from './components/progress'

const MarketingLazy = lazy(() =>
  import("./components/marketingApp")
    .then((module) => ({ default: module.MarketingApp })));

const AuthLazy = lazy(() =>
  import("./components/authApp")
    .then((module) => ({ default: module.AuthApp })));

const DashboardLazy = lazy(() =>
  import("./components/dashboardApp")
    .then((module) => ({ default: module.DashboardApp })));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory()

export const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  const onSignIn = () => {
    setIsSignedIn(true)
    history.push('/dashboard')
  }
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={() => <AuthLazy onSignIn={onSignIn}/>} />
              <Route
                path="/dashboard"
                component={() => !isSignedIn ? <Redirect to="/"/> : <DashboardLazy />}
              />
              <Route path="/" component={() => <MarketingLazy />} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
}