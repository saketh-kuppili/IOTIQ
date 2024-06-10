import React from 'react';
import NavigationBar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;