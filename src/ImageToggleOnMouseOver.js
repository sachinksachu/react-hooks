import React,{useRef} from 'react';
import ImageChangeOnMouseOver from '../pages/ImageChangeOnMouseOver';

const ImageToggleOnMouseOver =({ primaryImg, secondaryImg }) =>{

    const imageRef = useRef(null);
    return (
        <img
            src={primaryImg}
            ref={imageRef}
            onMouseOver={() => {
                imageRef.current.src = secondaryImg
            }}

            onMouseOut={() => {
                imageRef.current.src = primaryImg
            }}
            alt="qqqqqqq"
            />
    )
}

export default ImageToggleOnMouseOver;