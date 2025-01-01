'use client';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Fragment, useEffect} from 'react';

// @ts-ignore
const AOSProvider = ({children}) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return <Fragment>{children}</Fragment>;
};

export default AOSProvider;