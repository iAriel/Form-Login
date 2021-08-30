import {React, useState} from 'react'

import {Modal, Form, Button, Col, Row, FloatingLabel} from 'react-bootstrap'
import ReCAPTCHA from "react-google-recaptcha";

import styles from '../../../styles/components/modalRegister.module.css'
import InputCpf from '../../inputMask/cpf/index'
import InputDate from '../../inputMask/date/index'
import ToastAlert from '../../alert/index'

export default function ModalRegister(props){

    const [showRegister, setShowRegister] = useState(false)
    const [validate, setvalidate] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordClone, setPasswordClone] = useState('')
    const [wrong, setWrong] = useState(false)
    const [resume, setResume] = useState('')

    function handleRegisterModal(){
        setShowRegister(true)
    }

    

    function onHide(){
        setShowRegister(false)
        setvalidate(false);
    }

    function validation(value) {
        console.log("Captcha value:", value);
        setvalidate(true);
      }

      function validatePassword(){
          if(password !== passwordClone){
            setWrong(true)
            setTimeout(() =>{
                setWrong(false)
            }, 3000)
          }
      }

      function recivePassword(){
        validatePassword()
    }

    return(
        <div className={styles.containerRegister}>
            <Button className={styles.goRegister} onClick={handleRegisterModal}>Criar Conta</Button>
            <Modal
                {...props}
                show={showRegister}
                size="lg"
                centered
                className={styles.registerContainer}
                >
                <div className={styles.registerModal}>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                        <h3>Criar Conta</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Usuário" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Seu melhor email" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Senha" onChange={event => setPassword(event.target.value)}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPasswordCheck">
                                    <Form.Label>Confirmar Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Repita a senha" onChange={event => setPasswordClone(event.target.value)}/>
                                </Form.Group>
                            </Row>
                                {wrong && <ToastAlert/>}
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCPF">
                                        <Form.Label>CPF</Form.Label>
                                        <InputCpf />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridDate">
                                    <Form.Label>Data de nascimento</Form.Label>
                                    <InputDate />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                
                            </Row>
                                <Form.Group as={Col} controlId="formGridSex">
                                        <Form.Select aria-label="Sexo">
                                            <option value="1">Masculino</option>
                                            <option value="2">Feminino</option>
                                            <option value="3">Outros</option>
                                        </Form.Select>
                                </Form.Group>
                            <Row>
                                <Form.Label className={styles.labelResume}>
                                    <span>Resumo</span>
                                    <span>{140 -resume.length}</span>
                                    </Form.Label>
                                <FloatingLabel controlId="floatingTextarea2" >
                                    <Form.Control
                                    as="textarea"
                                    placeholder="Seu resumo aqui"
                                    style={{ height: '100px' }}
                                    onChange={event => setResume(event.target.value)}
                                    />
                                </FloatingLabel>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer id={styles.footer}>
                        <div className={styles.footerArea}>
                            <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={validation}
                            />
                            <div className={styles.buttonArea}>
                                <Button onClick={onHide}>Cancelar</Button>
                                <Button disabled={!validate} variant="primary" type="submit" onClick={recivePassword}>
                                    Criar conta
                                </Button>
                            </div>
                        </div>
                        
                    </Modal.Footer>
                </div>
            </Modal>
        </div>
    );
}