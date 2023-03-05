import React, {ReactElement, memo} from "react";
import '../styles/header.css'

export const HeaderComponent = memo(function HeaderComponent(): ReactElement{
    return (
        <div className="Header">
            <div>
                <h1 className="Title">
                    Welcome!
                </h1>
            </div>
            <div>
                <h2 className="SubHeader">
                    This is my website
                </h2>
            </div> 
        </div>
    )
})