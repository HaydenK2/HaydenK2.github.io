import './App.css';
import {Routes, Route} from 'react-router-dom';
// import Header from "./components/header/Header";
import Layout from "./Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutme/AboutMe";
import Footer from "./components/footer/Footer";
function App() {
  
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>} > </Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/about" element={<AboutMe/>}></Route>
          </Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;