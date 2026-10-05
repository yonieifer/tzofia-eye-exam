import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
