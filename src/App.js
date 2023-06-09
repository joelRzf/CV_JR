import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import {
    BrowserRouter as Router,
    Routes,
    Route, Link
} from "react-router-dom";
import AboutMe from "./views/AboutMe";
import Portfolio from "./views/Portfolio";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser, faFileCode, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import ContactMe from "./views/ContactMe";
library.add(faUser, faFileCode, faEnvelope,fab)


function App() {
    return (
        <div className="App">
            <Header/>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<AboutMe/>}/>
                    <Route path='/portfolio' element={<Portfolio/>}/>
                    <Route path='/contact' element={<ContactMe/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
