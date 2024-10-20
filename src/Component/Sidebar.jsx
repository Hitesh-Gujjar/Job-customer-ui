import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import menu and close icons from react-icons library

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`bg-gray-200 p-4 ${isOpen ? 'block' : 'hidden'} md:block w-48`}>
      <div className="md:hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={toggleSidebar}>
            {isOpen ? <FiX className="text-gray-800 text-2xl" /> : <FiMenu className="text-gray-800 text-2xl" />}
          </button>
        </div>
      </div>
      <ul>
        <li className="mb-2">Dashboard</li>
        <li className="mb-2">Profile</li>
        <li className="mb-2">Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;