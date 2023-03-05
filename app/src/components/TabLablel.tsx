import React, { ReactElement, memo } from "react";

interface IProps{
    label: string;
    className: string;
}

export const TabLabel = memo(function TabLabel(props: IProps): ReactElement{
    const {label, className} = props;

    return (
        <div className={className}>
            <span>{label}</span>
        </div>
    );

});
