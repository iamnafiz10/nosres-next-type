import '@/./app/globals.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "@/app/(NO HEADER)/Header";
import AOSProvider from '@/app/AOSProvider';

export const metadata = {
    title: 'Nosres',
    description: 'SITE NEW',
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
        </AOSProvider>
        <ToastContainer
            bodyClassName="toastBody"
        />
        </body>
        </html>
    )
}
