import React from 'react';
import Countries from './Components/Countries/Countries';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
};

export default App;