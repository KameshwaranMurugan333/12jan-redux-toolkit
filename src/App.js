import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Counter } from "./screens/Counter";
import { Todos } from "./screens/Todos";

function App() {
  return (
      <Provider store={store}>
          <Counter />
          <Todos />
      </Provider>    
  );
}

export default App;
