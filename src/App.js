import { useState } from "react";
import Buttons from "./components/Buttons/Buttons";
import Status from "./components/Status/Status";
import Table from "./components/Table/Table";

function App() {

  const [trains, setTrains] = useState([
    { number: 234, route: "Мурманск-Москва", time: "22:40", zlatoust: 0, kishtim: 1, miass: 2, muslumovo: 3, chelyabinsk: 0, poletaevo: 1, emanjelinsk: 2 },
    { number: 234, route: "Мурманск-Москва", time: "22:40", zlatoust: 0, kishtim: 0, miass: 2, muslumovo: 1, chelyabinsk: 0, poletaevo: 5, emanjelinsk: 0 },
    { number: 234, route: "Мурманск-Москва", time: "22:40", zlatoust: 0, kishtim: 0, miass: 3, muslumovo: 0, chelyabinsk: 1, poletaevo: 6, emanjelinsk: 0 },
    { number: 234, route: "Мурманск-Москва", time: "22:40", zlatoust: 0, kishtim: 2, miass: 1, muslumovo: 0, chelyabinsk: 0, poletaevo: 0, emanjelinsk: 0 },
    { number: 234, route: "Мурманск-Москва", time: "22:40", zlatoust: 0, kishtim: 3, miass: 0, muslumovo: 0, chelyabinsk: 0, poletaevo: 0, emanjelinsk: 0 },
    { number: 234, route: "Мурманск-Москва", time: "22:40", zlatoust: 1, kishtim: 0, miass: 1, muslumovo: 0, chelyabinsk: 0, poletaevo: 0, emanjelinsk: 0 },
    { number: 234, route: "Мурманск-Москва", time: "22:40", zlatoust: 2, kishtim: 0, miass: 0, muslumovo: 2, chelyabinsk: 0, poletaevo: 1, emanjelinsk: 0 },
    { number: 234, route: "Мурманск-Москва", time: "22:40", zlatoust: 3, kishtim: 0, miass: 5, muslumovo: 3, chelyabinsk: 2, poletaevo: 3, emanjelinsk: 0 },
  ])

  return (
    <div className="App">
      <div className="section">
        <p className="logo">TrainAI</p>
      </div>
      <Status />
      <Table trains={trains} setTrains={setTrains} />
      <Buttons />
    </div>
  );
}

export default App;
