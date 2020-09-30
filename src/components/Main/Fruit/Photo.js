import React from 'react'
import Img from "react-cool-img";

export default function Photo (props) {
        return (
        <div>
            <figure>
                <Img 
                    src={props.img} 
                    cache
                    width='100px'
                    height='100px'
                    debounce={1000}
                    alt={props.img}
                />
            </figure>
        </div>
    )
}

