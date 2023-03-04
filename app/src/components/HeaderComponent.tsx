import React, {ReactElement, memo} from "react";
import '../styles/header.css'

export const HeaderComponent = memo(function HeaderComponent(): ReactElement{
    return (
        <>
            <div>
                <h1 className="Header">
                    Welcome!
                </h1>
            </div>
            <div>
                <h2 className="SubHeader">
                    To the personal website of Dominic Polochak. Please take a look around
                </h2>
            </div> 
        </>
    )
})