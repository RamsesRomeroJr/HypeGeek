import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage"
import SneakerInfo from "./components/SneakerInfo"
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SearchResults from "./components/SearchResults"
import UserFavorites from "./components/UserFavorites"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div >
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route exact path="/">
            <SignupFormPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/sneaker/:styleId">
            <SneakerInfo />
          </Route>
          <Route path="/search-results">
            <SearchResults />
          </Route>
          <Route path="/favorites">
            <UserFavorites/>
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
