import {BrowserRouter as Router, Route} from 'react-router-dom'
import React from 'react'
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import ProductPage from './views/ProductPage';


function App() {
  return (
    <Router>
    <Header/>
    <main className="py-3">
    <Container>
      <Route path='/' component={Home} exact/>
            <Route path='/product/:id' component={ProductPage} />

      </Container>
      </main>
      
      <Footer/>
    </Router>
  );
}

export default App;
