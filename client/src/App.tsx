import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import NewAlertPage from "./pages/NewAlertPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/new-alert" element={<NewAlertPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
