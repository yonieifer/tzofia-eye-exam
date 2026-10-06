import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/alerts" element={<HomePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
