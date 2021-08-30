import React from 'react'
import InputMask from "react-input-mask";

export default function cpfInput(props){
    return <InputMask mask="999.999.999-99" onChange={props.onChange} value={props.value} />;
}