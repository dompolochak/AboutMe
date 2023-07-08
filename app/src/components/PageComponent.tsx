import React, {ReactElement, memo, useCallback, useMemo, useState} from "react";
import { HeaderComponent } from "./HeaderComponent";
import { BodyComoponent } from "./BodyCompnent";
import "../styles/page.css"


export const PageComponent = memo(function PageComponent(): ReactElement {

    const [contentChoice, setContentChoice] = useState(0);

    return (
    <>
        <div className="PageContainer"> 
            <HeaderComponent setContent={setContentChoice}/>
            <BodyComoponent contentChoice={contentChoice}/>
        </div>
    </>
    );
});


