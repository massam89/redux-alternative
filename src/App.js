import Test from "./components/Test";
import { useStore } from "./store";
import { toggleTheme } from "./store/actions/uiActions";

function App() {
  const { state, dispatch } = useStore();

  const changeThemeHandler = () => {
    dispatch(toggleTheme());
  };

  console.log('App');

  return (
    <div className="App">
      <button onClick={changeThemeHandler}>Submit</button>
      <p>{state.ui.isDark ? "true" : "false"}</p>
      <Test />
    </div>
  );
}

export default App;
