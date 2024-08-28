import { BrowserRouter, Routes, Route } from "react-router-dom";
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

import Home from "./Pages/Home";
import Splash from "./Pages/Splash";
import PG1 from "./Pages/AvantGarde/PG1";
import PG2 from "./Pages/AvantGarde/PG2";
import PG3 from "./Pages/AvantGarde/PG3";
import Simple from "./Pages/Traditional/Simple";
import MissingPage from "./Pages/MissingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="page1" element={<PG1 />} />
        <Route path="page2" element={<PG2 />} />
        <Route path="page3" element={<PG3 />} />
        <Route path="simple" element={<Simple />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
