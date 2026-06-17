import React, { useState } from "react";


function UseState() {
    const [color, setColor] = useState('red');
    const mouseOver = ()=>{
        setColor(color =='red' ? 'blue':'red');
    }
    return (
        <>
        <div>hello! Gaurav lo</div>
        <p style={{color:color}} onMouseOver={mouseOver}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, ducimus. Itaque iure pariatur facilis reprehenderit modi illum, esse soluta? Hic esse non beatae exercitationem facere dicta ex qui voluptatem assumenda.</p>
        </>
    )
}

export default UseState;    