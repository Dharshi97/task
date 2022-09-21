import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import signup from './components/signup';
import dashboard from './components/dashboard';
function App(){
  return(
    <div className= "App">
      <Router>
        <Routes>
          <Route exact path = '/' component={signup} />
          <Route exact path = '/dashboard' component={dashboard} />
        </Routes>
      </Router>

    </div>
  )
}
export default App;