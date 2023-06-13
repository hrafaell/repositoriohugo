import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 flex items-center justify-center">
          <button className="rounded-full p-2 inline-block">
            <div className="flex items-center justify-center">
              <h3 className="text-white text-2xl inline-block mr-2">Scroll Down</h3>
              <FaChevronDown size={24} className="text-white animate-bounce" />
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default Scroll;
