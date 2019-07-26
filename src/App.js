import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import Episode from './components/episode';
import LocationList from './components/LocationsList';
import { Link } from 'react-router-dom';
import CharacterCard from './components/CharacterCard.js';
import LocationCard from "./components/LocationCard.1";


export default function App() {



  return <main>
<Link to="/characters">Characters</Link> 
    <Link to="/locations">Locations</Link>
   <Link to="/episodes">Episodes></Link>
    
    <Header />
    <TabNav />
    
    <AppRouter />
    
    
   
  </main>
}