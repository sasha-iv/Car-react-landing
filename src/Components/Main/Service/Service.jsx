import React from "react";
import './Service.scss';
import TopBlock from "./TopBlock/TopBlock";
import OurService from "./OurService/OurService";
import Discount from "./Discount/Discount";

const Service = (props) => {
    return(
        <div className='serviceWrapper'>
            <TopBlock title={props.title}/>
            <OurService/>
            <Discount/>
        </div>
    )
}

export default Service;