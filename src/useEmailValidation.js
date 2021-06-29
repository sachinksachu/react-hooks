
import {useReducer, useState} from 'react';

function useEmailValidation(seconds){

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const [emailValid, setEmailValid] = useState(false);

const emailReducer = (state, action) => {
    console.log("action", action)
    const isEmailValid = validateEmail(action)
    setEmailValid(isEmailValid)
    return action; //action is the state 'email'
}

const [email, setEmail] = useReducer(emailReducer, '');
const maxSeconds = seconds;
const [count, setCount] = useState(maxSeconds);

const returnObject =  {count, email, setEmail, setCount, emailValid};

return returnObject
}

export default useEmailValidation;