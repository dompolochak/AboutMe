import React, {ReactElement, memo} from "react";
import { HeaderComponent } from "./HeaderComponent";
import { BodyComoponent } from "./BodyCompnent";
import "../styles/page.css"


export const PageComponent = memo(function PageComponent(): ReactElement {
    return (
    <>
        <div className="PageContainer"> 
            <HeaderComponent/>
            <BodyComoponent/>
        </div>
    </>
    );
});


