import RegisterComponent from '../containers/Register';
import LoginComponent from '../containers/Login';
import EmployeeComponent from '../containers/Employee';
import CreateEmployeeComponent from '../containers/CreateEmployee';

const routes = [
    {
        path: "/auth/register",
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path: "/auth/login",
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: "/",
        component: EmployeeComponent,
        title: 'Employee'
    },
    {
        path: "/employee/create",
        component: CreateEmployeeComponent,
        title: 'Create Employee'
    },
]

export default routes