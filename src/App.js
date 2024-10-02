import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import './Styles/App.css'

// 88                                                                                                                                     
// ""                                                              ,d                                                                     
//                                                                 88                                                                     
// 88  88,dPYba,,adPYba,   8b,dPPYba,    ,adPPYba,   8b,dPPYba,  MM88MMM     8b,dPPYba,   ,adPPYYba,   ,adPPYb,d8   ,adPPYba,  ,adPPYba,  
// 88  88P'   "88"    "8a  88P'    "8a  a8"     "8a  88P'   "Y8    88        88P'    "8a  ""     `Y8  a8"    `Y88  a8P_____88  I8[    ""  
// 88  88      88      88  88       d8  8b       d8  88            88        88       d8  ,adPPPPP88  8b       88  8PP"""""""   `"Y8ba,   
// 88  88      88      88  88b,   ,a8"  "8a,   ,a8"  88            88,       88b,   ,a8"  88,    ,88  "8a,   ,d88  "8b,   ,aa  aa    ]8I  
// 88  88      88      88  88`YbbdP"'    `"YbbdP"'   88            "Y888     88`YbbdP"'   `"8bbdP"Y8   `"YbbdP"Y8   `"Ybbd8"'  `"YbbdP"'  
//                         88                                                88                        aa,    ,88                         
//                         88                                                88                         "Y8bbdP"                          


import AnimatedRoutes from "./Components/AnimatedRoutes";
import Preloader from "./Components/Preloader";

function App() {


  //Page state
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const preLoadDelay = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }

    preLoadDelay();
  }, [])

  return isLoading ?
    (
      <Preloader />
    )
    :
    (
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    );
}

export default App;
