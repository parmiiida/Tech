'use client';

import React, { useState, useEffect } from 'react';

const frameworks = [
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Vue', icon: '/icons/vue.svg' },
  { name: 'Svelte', icon: '/icons/svelte.svg' },
  { name: 'Angular', icon: '/icons/angular.svg' },
  { name: 'Angular', icon: '/icons/angular.svg' },
  { name: 'Angular', icon: '/icons/angular.svg' },
  { name: 'Angular', icon: '/icons/angular.svg' },
  { name: 'Angular', icon: '/icons/angular.svg' },
  { name: 'Angular', icon: '/icons/angular.svg' },
];

const TechnologyCard = () => {
  const [cardsPerRow, setCardsPerRow] = useState(1);

  // Calculate cards per row based on screen width
  const updateCardsPerRow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1280) setCardsPerRow(5);
    else if (screenWidth > 1024) setCardsPerRow(4);
    else if (screenWidth > 768) setCardsPerRow(3);
    else if (screenWidth > 480) setCardsPerRow(2);
    else setCardsPerRow(1);
  };

  useEffect(() => {
    updateCardsPerRow();
    window.addEventListener('resize', updateCardsPerRow);
    return () => window.removeEventListener('resize', updateCardsPerRow);
  }, []);

  // Total cards to fill 5 rows
  const totalCards = cardsPerRow * 5;
  const emptyCardsCount = Math.max(0, totalCards - frameworks.length);

  // Calculate padding to center framework cards
  const padding = Math.floor((emptyCardsCount / 2));

  const emptyCardsBefore = Array.from({ length: padding }, (_, i) => ({
    name: `Empty Card ${i + 1}`,
    icon: null,
  }));

  const emptyCardsAfter = Array.from({ length: emptyCardsCount - padding }, (_, i) => ({
    name: `Empty Card ${i + 1 + padding}`,
    icon: null,
  }));

  const allCards = [...emptyCardsBefore, ...frameworks, ...emptyCardsAfter];

  return (
    <div className="grid gap-4 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 bg-gray-900 rounded-lg shadow-lg"
         style={{ gridTemplateColumns: `repeat(${cardsPerRow}, minmax(0, 1fr))` }}>
      {allCards.map((card, index) => (
        <div
          key={index}
          className={`h-24 flex items-center justify-center rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 ${
            card.icon ? 'bg-gray-800' : 'bg-gray-700 border border-gray-600'
          }`}
        >
          {card.icon ? (
            <img src={card.icon} alt={card.name} className="h-12 w-12" />
          ) : (
            <span className="text-gray-500">Empty</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TechnologyCard;
