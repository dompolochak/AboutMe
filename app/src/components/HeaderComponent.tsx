import React, {ReactElement, memo} from "react";
import '../styles/header.css'

interface IProps{
    setContent: (a: number) => void;
}

export const HeaderComponent = memo(function HeaderComponent(props: IProps): ReactElement{
    const {setContent} = props;

    return (
        <div className="Header">
            
                <h1 className="Title">
                    Dominic Polochak
                </h1>
            
            <div className="ButtonContainer">
                <div>
                    <button onClick={() => setContent(0)}>
                        About Me
                    </button>
                </div> 
                <div>
                    <button onClick={() => setContent(1)}>
                        Resume
                    </button>
                </div> 
                <div>
                    <button onClick={() => setContent(2)}>
                        Contact
                    </button>
                </div>
            </div> 
        </div>
    )
})