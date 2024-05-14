import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa'; // Import notification icon from react-icons library
import SignInModal from '../Pages/Auth/SignInModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">My Website</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white px-4 py-2 rounded-md mr-4"
        />
        <FaBell className="text-white text-2xl cursor-pointer" />
     
          <SignInModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          ></SignInModal>
      </div>
    </header>
  );
};

export default Header;
