import { useState, useEffect } from "react";
import useApi from '../services/api'; 
import { useHistory } from "react-router-dom";



export default () => {

    const api = useApi();
    const history = useHistory();
  

    useEffect(() => {

        const doLogout = async () => {
            await api.logout();
            history.push('/login');

        }
        doLogout();

    }, []);


    return null;
}