import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import { Provider } from "react-redux";
import store from "./store";
import Modal from "./Components/Modal";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Modal />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
