
import './App.css'
import Hero from './components/hero'
import { BrowserRouter, Routes, Route } from 'react-router';
import Details from './components/details';
import Card from './components/card';
import NotFound from './components/pagenotfound';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Hero /> <Card /> </>} />
          <Route path="/home" element={<><Hero /><Card /></>} />

          <Route path="/details/:id" element={<Details />} />
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

