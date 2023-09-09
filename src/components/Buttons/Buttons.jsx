import React, { useState } from 'react'
import style from "./Buttons.module.css"
import ModalWindow from '../ModalWindow/ModalWindow'

const Buttons = () => {

    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClickClose = () => {
        setShowModal(false)
    }

    return (
        <div className={style.buttons}>
            <button>История расписаний</button>
            <button onClick={handleClick}>Результат</button>
            {showModal && <ModalWindow close={handleClickClose} />}
        </div>
    )
}

export default Buttons