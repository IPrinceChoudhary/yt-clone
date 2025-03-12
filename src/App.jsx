import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
// import { Routes, Route } from "react-router";
// import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Body/>
    </Provider>
  );
};

export default App;
