import React from "react";
import '@/./app/globals.css';
import {ToastContainer} from "react-toastify";
import Header from "@/app/(SITE E)/Header";
import Footer from "@/app/(SITE E)/Footer";
import AOSProvider from '@/app/AOSProvider';

export const metadata = {
    title: 'Nosres',
    description: 'SITE E',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <AOSProvider>
            <Header/>
            {children}
            <Footer/>
        </AOSProvider>
        <ToastContainer
            bodyClassName="toastBody"
        />
        </body>
        </html>
    )
}
