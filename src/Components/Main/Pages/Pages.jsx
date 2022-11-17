import React from "react";
import './Pages.scss';
import TopBlock from "../Service/TopBlock/TopBlock";
import Staff from "./Staff/Staff";
import Feedbacks from "./Feedbacks/Feedbacks";

const Pages = (props) => {

    return(
        <div>
            <TopBlock title={props.title}/>
            <div className='pagesWrapper'>
               <Staff/>
                <br/>
                <br/>
               <Feedbacks/>
            </div>
        </div>
    )
}

export default Pages;