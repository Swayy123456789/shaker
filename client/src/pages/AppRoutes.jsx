import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import ShakeCreateForm from "./ShakeCreateForm";
import ShakeList from "./ShakeList/";
import ShakeUpdateForm from "./ShakeUpdateForm";
import ShakeView from "./ShakeView";
import OrderSummary from "./Summary";
import ONas from "./ONas/index";
import Kontakty from "./Kontakty/index";
import { Toaster } from 'react-hot-toast';
import AdminPanel from "./AdminPanel";
import SupportPage from "./Support";


export default function AppRoutes() {
  return (
    <>
        <BrowserRouter>
        <Toaster position="top-right" toastOptions={{
          duration: 1500,}}/>
            <Routes>
                 {/*Admin Panel*/}
                <Route path="/" element={<Home/>}/>
                <Route path="/add-shake" element={<ShakeCreateForm/>}/>
                <Route path="/view-shakes" element={<ShakeList/>}/>
                <Route path="/shakes/:id" element={<ShakeView/>}/>
                <Route path="/update-shakes/:id" element={<ShakeUpdateForm/>}/>

                <Route path="/summary" element={<OrderSummary/>}/>
                <Route path="/o-nas" element={<ONas/>}/>
                <Route path="/kontakt" element={<Kontakty/>}/>
                <Route path="/adminpanel" element={<AdminPanel/>}/>                
                <Route path="/support" element={<SupportPage/>}/>                

            </Routes>
        </BrowserRouter>
    </>
  )
}
