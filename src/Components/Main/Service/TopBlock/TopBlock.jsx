import React from "react";
import './TopBlock.scss';

const TopBlock = (props) => {
    return(
        <div className='topBlockWrapper'>
            <div className='topBlock'>
                <h1 className='topBlockTitle'>{props.title}</h1>
            </div>
        </div>
    )
}

export default TopBlock;