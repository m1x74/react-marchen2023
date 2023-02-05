import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import Header from "../components/Header/Header";

export const MainLayout = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

