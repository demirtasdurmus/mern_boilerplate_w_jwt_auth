import React from "react";
import { Redirect } from 'react-router-dom';


export default function PrivateRoute(props) {

    const { component: Component, ...rest } = props;
    const token = localStorage.getItem("token");

    if (localStorage.getItem("token") === null) {
        return <Redirect to="/login" />
    } else {
        return <Component {...props} />
    }
};