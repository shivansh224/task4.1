import React from 'react';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import ArticlesSection from './component/ArticlesSection';
import TutorialsSection from './component/TutorialsSection';
import SubscribeFooter from './component/SubscribeFooter';
import SiteFooter from './component/SiteFooter';
import './styles.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ArticlesSection />
      <TutorialsSection />
      <SubscribeFooter />
      <SiteFooter />
    </div>
  );
};

export default App;
