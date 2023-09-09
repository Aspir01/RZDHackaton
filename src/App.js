import Buttons from "./components/Buttons/Buttons";
import Status from "./components/Status/Status";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="App">
      <div className="section-one">
        <p className="logo">TrainAI</p>
        <div className="info-window">
          <p>Тут можно разместить информацию о модели или что-то ещё</p>
        </div>
      </div>
      <div className="section-two">
        <Status />
        <Table />
        <Buttons />
        <div className="howUse"><p>Тут будет инструкция по использованию нейросети.</p> </div>
      </div>
    </div>
  );
}

export default App;
