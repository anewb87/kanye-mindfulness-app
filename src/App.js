import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import UserProvider from './Contexts/UserContext';
import QuoteProvider from './Contexts/QuoteContext';
import Dashboard from './Pages/Dashboard/Dashboard';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import FeaturesPage from './Pages/FeaturesPage/FeaturesPage';
import JournalPage from './Pages/JournalPage/JournalPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import MoodPage from './Pages/MoodPage/MoodPage';
import './SASS/base.scss';


const App = () => {
  return (
    <UserProvider>
      <QuoteProvider>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/journal" component={JournalPage} />
            <Route exact path="/features" component={FeaturesPage} />
            <Route exact path="/mood" component={MoodPage} />
            <Route exact path="/error" component={ErrorPage} />
            <Redirect to="/error" />
          </Switch>
        </div>
      </QuoteProvider>
    </UserProvider>
  );
};

export default App;
