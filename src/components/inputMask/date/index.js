import React from 'react'
import InputMask from "react-input-mask";

export default function dateInput(props){
    return <InputMask mask="99/99/9999" onChange={props.onChange} value={props.value} />;
}