import "./App.css";
import { CalculatorUi } from "./component/calculatorui";
import { calculatorStore } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="app">
      <Provider store={calculatorStore}>
        <CalculatorUi />
      </Provider>
    </div>
  );
}

export default App;
