import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
     
      <Topbar toggleSidebar={toggleSidebar} />

      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />

        <main className="flex-1 p-6 overflow-auto transition-all duration-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
