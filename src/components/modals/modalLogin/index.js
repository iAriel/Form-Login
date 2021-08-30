import {React, useState} from 'react';
import {Form, Button, Modal } from 'react-bootstrap'

import styles from '../../../styles/components/modalLogin.module.css'
export default function ModalLogin(props){

    const [showLogin, setShowLogin] = useState(false)

    function handleModalLogin(){
        setShowLogin(true);
    }

    function handleHome(){
        setShowLogin(false)
    }

    return(
        <div className={styles.container}>
            <Button className={styles.goLogin} onClick={handleModalLogin}>Login</Button>
            <Modal size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered 
                show={showLogin}
                className={styles.modalContainer}
            >
                <Modal.Body>
                    <aside className={styles.formArea}>
                        <div className={styles.formSpace}>
                            <p>Login</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="meuemail@email.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="senha" />
                                </Form.Group>
                            </Form>
                            <div className={styles.buttonContaier}>
                                <Button className={styles.enter} onClick={handleModalLogin}>Entrar</Button>
                                <Button className={styles.goHome} onClick={handleHome}>Voltar</Button>
                            </div>
                            
                        </div>
                    </aside>
                </Modal.Body>
            </Modal>
        </div>
    );
}
