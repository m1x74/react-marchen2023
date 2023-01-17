import './App.css';

import {Simpsons} from "./components/Simpsons/simpsons";
import {Characters} from "./components/Characters/characters";

const App =()=> {


    return (
    <div className="App">
        <Simpsons/>
        <h1>Rick And Morty</h1>
        <Characters/>

    </div>
  );
}

export default App;
