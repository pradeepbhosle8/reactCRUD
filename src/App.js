import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Footer from "./layout/footer";
import Header from "./layout/Header";
import Sidebar from "./layout/sidebar";
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Users from "./components/pages/Users";
import Role from "./components/pages/Role";


function App() {
    return ( 
      <>
     
     <BrowserRouter>
     <div className="wrapper">      
      <Header />
      <Sidebar />  
      <div className="content-wrapper">

          <Routes>
            
         <Route exact path="/" element={<Dashboard />} />
         <Route exact path="/contact" element={<Contact />} />
         <Route exact path="/about"  element={<About />} />
         <Route exact path="/users" element={<Users />} />
         <Route exact path="/role" element={<Role/>} />
         </Routes>

      {/* <Dashboard /> */}
      {/* <Contact />
      <About />   */}


      </div>
      
      <Footer/>
      </div>

     </BrowserRouter>

      </>
    );
}


export default App;