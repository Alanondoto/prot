import './App.css';
import MainMenu from './components/MainMenu/MainMenu.jsx';

function App(props) {
  return (
    <MainMenu store={props.store.state.mainMenuPage} />
  )
}

export default App;
