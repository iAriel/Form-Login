import {React} from 'react';

import styles from '../../styles/pages/pageDefault.module.css'

import ModalLogin from '../../components/modals/modalLogin/index'
import ModalRegister from '../../components/modals/modalRegister/index'

export default function Home (){  
    return(
        <div className={styles.container}>
            <aside className={styles.sideContent}>
                <div className={styles.textInformation}>
                    <h1>
                        Lorem ipsum 
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className={styles.buttonArea}>
                    <ModalLogin />
                    <ModalRegister />
                </div>
            </aside>
            
        </div>
    );
}