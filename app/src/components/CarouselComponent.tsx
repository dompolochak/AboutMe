import React, { ReactElement,memo, useCallback, useState } from "react";
import '../styles/carousel.css'

interface IProps{
    children: JSX.Element[];
}

export const CarouselComponent = memo(function CarouselComponent({children}: IProps): ReactElement {

    const [currSlide, setCurrSlide] = useState(0);

    const slideLeft = useCallback(() => {
        if(currSlide > 0)
        {
            setCurrSlide(currSlide-1);
        }
        else
        {
            setCurrSlide(children.length-1)
        }
    }, [currSlide])

    const slideRight = useCallback(() => {
        if(currSlide < children.length-1)
        {
            setCurrSlide(currSlide+1);
        }
        else
        {
            setCurrSlide(0);
        }
    }, [currSlide])

    return(
        <div className="carousel">
            <button className="leftButton" onClick={slideLeft}>Left</button>
            <div className="content">
                {children[currSlide]}
            </div>
            <button className="rightButton" onClick={slideRight}>Right</button>
        </div>
    )

})