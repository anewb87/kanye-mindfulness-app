import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import FeaturesPage from './Pages/FeaturesPage/FeaturesPage';
import JournalPage from './Pages/JournalPage/JournalPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import MoodPage from './Pages/MoodPage/MoodPage';


const App = () => {
  return (
    <div className="App">
     <Switch>
       <Route exact path='/' render={LandingPage}/>
       <Route exact path='/features' component={FeaturesPage}/>
        <Route exact path='/journal' component={JournalPage} />
        <Route exact path='/mood' component={MoodPage} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/error' component={ErrorPage} />
        <Redirect to="/error" />
     </Switch>
    </div>
  );
}

export default App;
