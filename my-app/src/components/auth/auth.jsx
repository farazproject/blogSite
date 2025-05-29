import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../../src/redux/slices/authSlice';

function Authen (){

        const storeStates = useSelector( (state) => state.authentication.isAuthenticated);
        console.log(storeStates,"edwwdewed");

        const dispatched = useDispatch();

    return (
        <div>
            <h1> State: { storeStates ? "yes":"no"}</h1>
            <button onClick={() => dispatched(login())}> Click to login </button> <br />
            <button onClick={() => dispatched(logout())}> Click to logout </button>
        </div>
    )
}

export default Authen;