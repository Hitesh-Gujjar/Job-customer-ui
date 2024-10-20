import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa'; // Import notification icon from react-icons library
import SignInModal from '../Pages/Auth/SignInModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
      <h1 className="text-xl font-semibold">My Website</h1>
      <ul className='flex gap-4'>
        <li>Home</li>
        <li>Jobs</li>
        <li>Companies</li>
      </ul>
      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search..."
          className="bg-white text-white px-4 rounded-lg"
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
