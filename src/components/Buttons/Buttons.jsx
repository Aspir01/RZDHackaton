import React from 'react'
import style from "./Buttons.module.css"

const Buttons = () => {
    return (
        <div className={style.buttons}>
            <button>История расписаний</button>
            <button>Результат</button>
        </div>
    )
}

export default Buttons