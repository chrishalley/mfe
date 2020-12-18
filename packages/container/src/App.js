import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import { Header } from './components/header'
import { Progress } from './components/progress'

const MarketingLazy = lazy(() =>
  import("./components/marketingApp")
    .then((module) => ({ default: module.MarketingApp })));

const AuthLazy = lazy(() =>
  import("./components/authApp")
    .then((module) => ({ default: module.AuthApp })));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={() => <AuthLazy onSignIn={() => setIsSignedIn(true)}/>} />
              <Route path="/" component={() => <MarketingLazy />} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}