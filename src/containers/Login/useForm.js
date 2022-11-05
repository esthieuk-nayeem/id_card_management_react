import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/Provider";


export default () => {
    const [form, setForm] = useState({});
    const {authDispatch, authState:{auth:{loading, error, data }}} = useContext(GlobalContext);
    const history = useNavigate(); 


    console.log("loading" , loading)
    console.log("error", error)
    console.log("data", data)


// using useEffect to force navigate to dashboard page after login complete

    useEffect (() => {
        if (data) {
            if (data.user) {
                history("/");
            }
        }
    }, [data]);


// onChange to handle change of all field value

    const onChange = (e, {name, value}) => {
        setForm({...form, [name]:value});
    };

    console.log("form", form)

    const LoginFormValid = 
                            !form.username ||
                            !form.password ;

    const onSubmit = () => {
        login(form)(authDispatch);
    }
};

return {form, onchange, LoginFormValid, onSubmit, loading, error}