import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import NewAlertPage from "./pages/NewAlertPage";
import AlertPage from "./pages/AlertPage";
import UpdatePage from "./pages/UpdatePage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/alert/new" element={<NewAlertPage />} />
                        <Route path="/alert/update/:id" element={<UpdatePage />} />
                        <Route path="/alert/:id" element={<AlertPage />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
