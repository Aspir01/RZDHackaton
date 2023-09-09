import React from 'react'
import style from "./ModalWinidow.module.css"

const ModalWindow = ({ close }) => {
    return (
        <div className={style.modal}>
            <div className={style.modalContent}>
                <div className={style.modalHeader}>
                    <p>Результат</p>
                    <svg width="30" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={close}>
                        <path d="M1.78125 17.5312L0.46875 16.2188L7.6875 9L0.46875 1.78125L1.78125 0.46875L9 7.6875L16.2188 0.46875L17.5312 1.78125L10.3125 9L17.5312 16.2188L16.2188 17.5312L9 10.3125L1.78125 17.5312Z" fill="white" />
                    </svg>
                </div>
                <div className={style.info}>
                    <p>Тут будет результат выполнения</p>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow