import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageShifter = ({ 
  images = ['/api/placeholder/400/300'], 
  title = 'Gallery',
  subtitle = 'Explore our collection',
  alt = 'Shifted Image' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex items-center justify-center space-x-6 p-6">
      <div className="w-1/4 pr-6">
        <h2 className="text-5xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-3xl text-gray-600">{subtitle}</p>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          onClick={handlePrevious} 
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          disabled={images.length <= 1}
        >
          <ChevronLeft />
        </button>
        <img 
          src={images[currentIndex]} 
          alt={`${alt} ${currentIndex + 1}`} 
          className="w-full max-w-[300px] h-[200px] object-contain rounded-md"
        />
        <button 
          onClick={handleNext} 
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          disabled={images.length <= 1}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageShifter;