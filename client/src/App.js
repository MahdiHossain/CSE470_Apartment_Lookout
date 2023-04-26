import {Route, Routes } from 'react-router-dom'
import './App.css';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Newsletter from './components/newsletter/Newsletter';
import PopularProperties from './components/popularProperties/PopularProperties';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Properties from './components/properties/Properties';
import FeaturedProperties from './components/featuredProperties/FeaturedProperties';
import PropertyDetails from './components/propertyDetails/PropertyDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
          <Navbar/>
          <Hero/>
          <PopularProperties/>
          <FeaturedProperties/>
          <Newsletter/>
          <Footer/>
          </>
        } />

        <Route path='/properties' element={
          <>
          <Navbar/>
          <Properties/>
          <Footer/>
            
        </>} /> 

        <Route path='/propertyDetails/:id' element={
          <>
          <Navbar/>
          <PropertyDetails/>
          <Footer/>
          </>
        } />  

        <Route path='/signup' element={<Signup/>} /> 
        <Route path='/signin' element={<Signin/>} /> 
      </Routes>
    </div>
  );
}

export default App;
