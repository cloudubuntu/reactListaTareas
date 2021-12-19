//BORRAR TODO LO COMENTADO

//import logo from './logo.svg';
import "./App.css";
import Subtitulo from "./components/Subtitulo";
import Titulo from "./components/Titulo";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    //props objetos inmutable, unidireccional de padres a hijos. forma de agregar como dice "comision"
    <div>
      {" "}
      <Titulo></Titulo>
      
      <Subtitulo comision='c19i' estado={true}/>
      
      <hr/>
      <Button variant="primary">Primary</Button>
    </div>

  );
}

export default App;
