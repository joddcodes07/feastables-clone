import React from 'react';
import StoryTopImage from '../Components/OurStory/StoryTopImage';
import StoryCardsBg from '../Components/OurStory/StoryCardsBg';
import StoryStackedCards from '../Components/OurStory/StoryStackedCards';

const OurStory = () => {
  return (
    <main className="w-full bg-white font-sans relative">
      <StoryTopImage />
      <StoryCardsBg />
      <StoryStackedCards />
    </main>
  );
};

export default OurStory;
