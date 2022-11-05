import { useState, useContext } from "react"
import { GlobalContext } from "../../context/Provider";
import { register } from '../../context/actions/auth/register';

export default  () => {

    const[form, setForm] = useState({});

    const {authDispatch} = useContext(GlobalContext);

    const onChange = (e,{ name, value }) => {
        setForm({...form, [name]: value });
      };
    

    console.log("form", form)

    const registerFormValid =  
                              !form.username || 
                              !form.firstname ||
                              !form.lastname ||
                              !form.email ||
                              !form.password ; 

    const onSubmit = () => {

      register(form)(authDispatch);
      setForm({})

    }

    return {form , onChange ,registerFormValid, onSubmit}; 

}