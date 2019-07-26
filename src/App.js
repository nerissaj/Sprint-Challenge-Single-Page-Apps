import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import Episode from './components/episode';
import LocationList from './components/LocationsList';
import { Link } from 'react-router-dom';
import CharacterCard from './components/CharacterCard.js';
import LocationCard from './components/LocationCard.js';


export default function App() {
  return <main>

    
    <Header />
    <TabNav />
    
    <AppRouter />
    
    <Link to="/characters"/ component={Characteer />
    <Link to="/location"/ component={Location} />
   <Link to="/episodes"/ component={Episode} />
    
  </main>
}