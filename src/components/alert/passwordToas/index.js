import React from 'react'

import {Toast} from 'react-bootstrap'

export default function toastPassword(){
    return(
        <Toast>
            <Toast.Body>As senhas não correspondem</Toast.Body>
        </Toast>
    );
}