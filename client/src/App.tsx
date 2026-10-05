import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import MainAlertsPage from "./pages/MainAlertsPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/alerts" element={<MainAlertsPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
