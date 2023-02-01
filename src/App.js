import {CarForm, Cars} from "./components";
import {useState} from "react";


const App = () => {

    const [newCar, setNewCar] = useState(null);
    const [updateCar, setUpdateCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);


    return (
        <div className="App">
            <CarForm setNewCar={setNewCar} setUpdateCar={setUpdateCar} carForUpdate={carForUpdate}
                     setCarForUpdate={setCarForUpdate}/>
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} updateCar={updateCar}/>

        </div>
    );
}

export default App;
