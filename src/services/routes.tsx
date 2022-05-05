import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";


export default function MainRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/2" element={<h1>Hello !</h1>}/>
    </Routes>
  )
}