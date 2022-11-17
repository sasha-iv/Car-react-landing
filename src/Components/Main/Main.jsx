import React from "react";
import Service from "./Service/Service";
import About from "./About/About";
import {Route, Routes} from "react-router-dom";
import Cars from "./Cars/Cars";
import Pages from "./Pages/Pages";
import Contacts from "./Contacts/Contacts";

const Main = () => {

    return(
        <div>
            <Routes>
                <Route path='*' element={<About/>}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/service' element={<Service title='Our service'/>}></Route>
                <Route path='/cars/:carId' element={<Cars title='Cars'/>}></Route>
                <Route path='/cars' element={<Cars title='Cars'/>}></Route>
                <Route path='/pages' element={<Pages title='Pages'/>}></Route>
                <Route path='/contacts' element={<Contacts title='Contacts'/>}></Route>
            </Routes>
        </div>
    )
}

export default Main;