import React from 'react';
import { Bell, Menu } from 'lucide-react';
import profile_pic from '../assets/profile_pic.png';

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="w-full bg-white shadow-lg px-6 py-4 flex items-center justify-between">
     
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar} 
          className="hover:bg-blue-50 p-2 rounded-lg transition-colors"
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold text-blue-600">InternHub</h1>
      </div>

     
      <div className="flex items-center gap-6">
        
        <button className="relative hover:bg-blue-50 p-2 rounded-lg transition-colors">
          <Bell className="h-6 w-6 text-gray-700" />
          <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full"></span>
        </button>
        
       
        <div className="flex items-center gap-3">
          <img
            src={profile_pic}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover border-2 border-blue-200"
          />
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-800">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;