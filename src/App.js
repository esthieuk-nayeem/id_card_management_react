import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import routes from './routes';
import EmployeeContainer from './containers/Employee';
import RegisterContainer from './containers/Register';
import LoginContainer from './containers/Login';
import CreateEmployeeContainer from './containers/CreateEmployee';
import { GlobalProvider } from './context/Provider';





function App() {

    return (
      <GlobalProvider>
      <Routes>
        <Route path="/" element={<EmployeeContainer />} />
        <Route path="/auth/register" element={<RegisterContainer />} />
        <Route path="/auth/login" element={<LoginContainer />} />
        <Route path="/employee/create" element={<CreateEmployeeContainer />} />
      </Routes>
      </GlobalProvider>
    )

}

export default App
