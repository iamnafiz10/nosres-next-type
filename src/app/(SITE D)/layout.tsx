import React from "react";
import '@/./app/globals.css';
import {ToastContainer} from "react-toastify";
import Header from "@/app/(SITE D)/Header";
import Footer from "@/app/(SITE D)/Footer";

export const metadata = {
    title: 'Nosres',
    description: 'SITE D',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        <Footer/>
        <ToastContainer
            bodyClassName="toastBody"
        />
        </body>
        </html>
    )
}
