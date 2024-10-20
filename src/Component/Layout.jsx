import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className='h-screen relative bg-gray-100'>
            <Header />
            <div className="flex ">
                {/* <Sidebar /> */}
                <div className="flex-1">
                    <main className="h-[calc(100vh-88px)] overflow-y-scroll">
                        <div className='mx-6 mb-6'>
                            {children}
                        </div>
                    </main>
                </div>
            </div>
            <div className='fixed bottom-0 w-[100%]'>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
