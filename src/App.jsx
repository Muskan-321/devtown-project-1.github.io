import React from "react";
import Header from "./Header";
import Notes from "./Notes";
import Right from "./Right";
import Up from "./Up";
import Down from "./Down";
import Done from "./Done";
import Left from "./Left";
import Open from "./Open";
import Footer from "./Footer";
import './App.css';

function App() {
    return ( <div className = "App" >
        <div>
        <Header />
        <Done />
        <Notes/>
<Left/>
    <Right/>
<Up/>
        <Down/>
        <Open/>
        <Footer/>
        </div> 
        </div>
    );
}

export default App;