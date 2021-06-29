import { useReducer, useState } from 'react';

function EmailValidatingForm() {

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
    const maxSeconds = 30;
    const [count, setCount] = useState(maxSeconds);
    return (
        <div className="container">
            <br />
            <div>
                <div className="content">
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value); //call 'emailReducer'
                        }}
                        disabled={count <= 0}
                        value={email}
                        placeholder="Enter Email"
                        type="email"
                        name="email"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;
                    <button
                        disabled={!emailValid || count <= 0}
                        onClick={() => {
                            setCount(0);
                            alert(`button clicked with email ${email}`);
                        }}
                        className="btn-lg"
                        type="submit"
                    >
                        PRESS ME!
                    </button>
                    <div>
                        {count > 0
                            ? `You Have ${count} Seconds To Enter Your Email`
                            : 'Email Entered or Time Expired'}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EmailValidatingForm;