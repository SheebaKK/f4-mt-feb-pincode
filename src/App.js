import React, { useState } from "react";
import HomePage from "./components/HomePage";
import InfoDisplayPage from "./components/InfoDisplayPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PinCodeContext from "./Context/PincodeContext";


import "./style.css"

const App= ()=>{

    const[details, setDetails]= useState(null);
    function getInfo(info){
        setDetails(info);
    }

    return(
        <PinCodeContext.Provider value={{details ,setDetails}}>
            
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="/info" element={<InfoDisplayPage />} />
                </Routes>
            </BrowserRouter>
        </PinCodeContext.Provider>
    )
}

export default App