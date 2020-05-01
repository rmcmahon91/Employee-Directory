import React from "react"
export default function Image(props){
    return <img  src={props.source} className={props.class} style={{width:"100%"}}   />
    
}