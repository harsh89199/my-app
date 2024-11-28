import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correctly importing BrowserRouter
import './App.css';
import 'bulma/css/bulma.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About'; // Make sure this component exists and is correctly imported
import Items from './components/Item';
import ItemPage from './components/ItemPage';
import Couter from './components/Couter';
import { Authenticator } from '@aws-amplify/ui-react';
/* import Items from './dummy/Items'; */
/* import ItemPage from './components/ItemPage'; */

function App() {
  return (

    
/*    <Couter/> */
    <Router>
      <Header />
      <Authenticator loginMechanisms={['email']} signUpAttributes={['name']}>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path='/items' element={<Items/>}/>
        <Route path='/items/:id' element={<ItemPage/>}/>

      </Routes>
      </Authenticator>
      <Footer />
    </Router>
  );
}

export default App;
