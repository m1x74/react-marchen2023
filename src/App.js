import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";

const App =()=> {
  return (
    <div>
         <Routes>
             <Route path={'/'} element={<MainLayout/>}>


             </Route>


         </Routes>
    </div>
  );
}

export {
    App
}
