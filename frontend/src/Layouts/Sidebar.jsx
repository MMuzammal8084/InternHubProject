import React from 'react';
import { LayoutDashboard, Users, Briefcase, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`hidden md:block h-full bg-white shadow-lg px-4 py-6 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Logo section */}
      {isOpen && (
        <div className="mb-8 px-3">
          <h2 className="text-xl font-bold text-blue-600">Menu</h2>
        </div>
      )}

      <nav className="flex flex-col space-y-2">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
              isActive 
                ? 'bg-blue-100 text-blue-600 border-r-4 border-blue-600' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`
          }
        >
          <LayoutDashboard className="h-5 w-5" />
          {isOpen && <span className="font-medium">Dashboard</span>}
        </NavLink>

        <NavLink 
          to="/candidate" 
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
              isActive 
                ? 'bg-blue-100 text-blue-600 border-r-4 border-blue-600' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`
          }
        >
          <Users className="h-5 w-5" />
          {isOpen && <span className="font-medium">Candidates</span>}
        </NavLink>

        <NavLink 
          to="/internship" 
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
              isActive 
                ? 'bg-blue-100 text-blue-600 border-r-4 border-blue-600' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`
          }
        >
          <Briefcase className="h-5 w-5" />
          {isOpen && <span className="font-medium">Internships</span>}
        </NavLink>

        <NavLink 
          to="/profile" 
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
              isActive 
                ? 'bg-blue-100 text-blue-600 border-r-4 border-blue-600' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`
          }
        >
          <User className="h-5 w-5" />
          {isOpen && <span className="font-medium">Profile</span>}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;