// Navbar.tsx
// This component creates a simple navigation bar with Home and About tabs

import { useState } from 'react';

// This component handles the navigation between different pages
const Navbar = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  // activeTab keeps track of which tab is currently selected
  const [activeTab, setActiveTab] = useState('home');
  
  // This function handles clicking on a tab
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setActivePage(tab);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        {/* Website title/logo */}
        <div className="text-white font-bold text-xl">My Personal Website</div>
        
        {/* Navigation tabs */}
        <div className="space-x-4">
          {/* Home tab */}
          <button 
            className={`px-3 py-2 rounded ${activeTab === 'home' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
            onClick={() => handleTabClick('home')}
          >
            Home
          </button>
          
          {/* About tab */}
          <button 
            className={`px-3 py-2 rounded ${activeTab === 'about' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
            onClick={() => handleTabClick('about')}
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
