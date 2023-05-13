
import './App.css';
import Homepage from './components/chat';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import { BrowserRouter, Route, Routes, Switch, useHistory } from "react-router-dom";
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter>
      {/* <Switch> */}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      {/* </Switch> */}
    </BrowserRouter>


  );
}

export default App;
