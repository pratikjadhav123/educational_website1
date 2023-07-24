 import React from 'react';
import Hero from './hero/Hero';
import AboutCard from '../about/AboutCard';
import HAbout from './HAbout';
import Test from './testimonal/Test';
import Price from '../pricing/Price';
import Team from '../team/Team';

 const Home = () => {
   return (
     <div>
        <Hero/>
        <AboutCard/>
        <HAbout/>
        <Test/>
      

     </div>
   )
 }
 
 export default Home