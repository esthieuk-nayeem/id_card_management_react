import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router, Routes,
  Switch,
  Route
} from "react-router-dom";
import routes from './routes';


function App() {
  return(
    
      
      <Router>
        <Switch>

          {routes.map((route, index)=> (
            <Route 
            key={index}
            path={route.path} 
            exact 
            render={(props) => <route.component {...props} />}>
            </Route>
          ))}


        </Switch>
      </Router>
      
    

  )


}

export default App