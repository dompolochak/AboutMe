import React, { ReactElement, memo} from "react";
import '../styles/body.css'

interface IProps{
    message: string;
    className: string;
}

export const TabBody = memo(function TabBody(props: IProps): ReactElement{
    const {message} = props;
    const {className} = props;

    return (
        <div className={className}>
            <p className="BodyParagraph">{message} </p>
        </div>
    )

});