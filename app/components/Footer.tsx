import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-stone-200
     py-4 rounded-t-lg">
      <div className="container mx-auto flex items-center justify-center">
        <span className="flex items-center">
          <div className="rounded-full h-3 w-3 bg-green-500 mr-2"></div>
          <span className="bg-green-600 text-xs px-2 py-1 rounded">Online</span>
        </span>
        <p className="text-lg ml-4">&copy; 2024 Nicat-dcw. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
