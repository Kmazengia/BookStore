import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}</Route></Routes>'>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
