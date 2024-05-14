import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1">
                    <main className="">
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Layout;
