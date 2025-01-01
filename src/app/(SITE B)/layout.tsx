import '@/./app/globals.css';
import {ToastContainer} from "react-toastify";
import Header from "@/app/(SITE B)/Header";
import React from "react";

export const metadata = {
    title: 'Nosres',
    description: 'SITE B',
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
        <ToastContainer
            bodyClassName="toastBody"
        />
        </body>
        </html>
    )
}
