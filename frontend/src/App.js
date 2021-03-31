import React from 'react';
import './index.css'
import { Container } from 'react-bootstrap'
import './bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <>
    <Header/>
    <main className="py-3">
      <Container>
        <Homescreen/>
      </Container>
    </main>
    <Footer/>
    </>

  );
}

export default App;
