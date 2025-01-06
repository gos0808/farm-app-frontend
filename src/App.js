import './App.css';

import React from "react";
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';

import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { isLoading } = useAuth0();

  return (
    isLoading?
    <div>Loading...</div>:
    <div className='App'>
      <Header />
      <Footer />
    </div>

  );
}

export default App;
