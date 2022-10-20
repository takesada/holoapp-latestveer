import { BrowserRouter,Route,Routes } from "react-router-dom"
import {Streaming150922} from "../../components/moleculars/streaming150922.jsx"
import {Streaming290821} from "../../components/moleculars/streaming290821.jsx"
export const SingingStreamContents =()=>{
    return(
        <div>
        {/* <Routes>
            <Route> */}
                <Streaming150922/>
                <Streaming290821/>
            {/* </Route>
        </Routes> */}
        </div>
    )
}


