import {RouterProvider} from "react-router-dom";
import Route from "./routes/Route.jsx";
import Cours from './components/cours/Cours.jsx';

function App() {
  return (
    <>
      <div>
        <RouterProvider router={Route} />
        
        {/* <div>
          <br/><br/>
          <br/><br/>
          <br/><br/>
          <br/><br/>
          <br/><br/>
          <Cours />
        </div> */}
      </div>
    </>
  )
}

export default App
