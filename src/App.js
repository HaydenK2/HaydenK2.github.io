import './App.css';
import {Routes, Route} from 'react-router-dom';
// import Header from "./components/header/Header";
import Layout from "./Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>} > </Route>
            <Route path="/projects" element={<Projects/>}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;