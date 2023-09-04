import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Foo from './components/Foo';
import Nav from './components/Nav';
import Home from './pages/Home';
import SingleProducts from './pages/SingleProducts'
import { Container } from '@mui/material';
import Cons from './components/Cons';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<SingleProducts />} />
          {/* <Route path='/test' element={<Cons />} /> */}
        </Routes>
      </Container>
      <Foo />
    </BrowserRouter>
  );
}

export default App;
