
import Create from "./component/Create"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App(){
    return(<div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Create></Create>}></Route>
            </Routes>
        </BrowserRouter>
    </div>)
}

export default App