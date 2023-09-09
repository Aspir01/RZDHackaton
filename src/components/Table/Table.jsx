import React from 'react'
import style from "./Table.module.css"

const Table = ({ trains, setTrains }) => {
    return (
        <div className={style.tableContainer}>
            <table class={style.table}>
                <thead>
                    <tr>
                        <th>Номер поезда</th>
                        <th>Маршрут</th>
                        <th>Прибытие</th>
                        <th>Златоуст</th>
                        <th>Кыштым</th>
                        <th>Миасс</th>
                        <th>Муслюмово</th>
                        <th>Челябинск</th>
                        <th>Полетаево</th>
                        <th>Еманжелинск</th>
                    </tr>
                </thead>
                <tbody>
                    {trains.map((train, i) => {
                        return <tr key={i} >
                            <td>{train.number}</td>
                            <td>{train.route}</td>
                            <td>{train.time}</td>
                            <td>{train.zlatoust}</td>
                            <td>{train.kishtim}</td>
                            <td>{train.miass}</td>
                            <td>{train.muslumovo}</td>
                            <td>{train.chelyabinsk}</td>
                            <td>{train.poletaevo}</td>
                            <td>{train.emanjelinsk}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table