import React, { useState } from "react";
import Modal from "../../Component/Modal";

const SignInModal = ({ isOpen, onClose, isModalOpen, setIsModalOpen }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log("Signing in with:", email, password);
        onClose();
    };

    return (
        <>
            <button className='text-white px-4 text-2xl cursor-pointer'
                onClick={() => openModal()}
            >
                Sign In
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className={`fixed inset-0 z-50 flex items-center justify-center `}>
                    <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
                    <div className="bg-white rounded-lg p-8 shadow-lg w-80">
                        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
                        <form onSubmit={handleSignIn}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default SignInModal;
