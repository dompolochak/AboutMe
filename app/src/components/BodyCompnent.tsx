import React, {memo, ReactElement, useState, useMemo} from "react";

import "../styles/body.css"
import { AboutMe } from "./AboutMe";

interface IProps{
    contentChoice: number;
}

export const BodyComoponent = memo(function BodyComponent(props: IProps): ReactElement {
    const {contentChoice} = props;

    const content = useMemo(() => {
        switch(contentChoice){
            case 0:
                return <AboutMe/>
            case 1:
                return <><p>1111111111111</p></>
            case 2:
                return <><p>2222222222222</p></>
        }
    }, [contentChoice])

    return (
        <div className="Body">
                {content}    
        </div>
    )

});