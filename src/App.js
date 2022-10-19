import Lienzo from './components/lienzo/Lienzo';
import Menu from './components/menu/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
        <div class="w3-row">
          <Lienzo></Lienzo>
          <div class="w3-col l4 w3-center">
            <Menu></Menu>
          </div>
        </div>
    </div>
  );
}

export default App;
