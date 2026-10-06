import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import NewAlertPage from "./pages/NewAlertPage";
import AlertPage from "./pages/AlertPage";
import UpdatePage from "./pages/UpdatePage";
import LoginPage from "./pages/LoginPage";
import RegisteredRoutes from "./protectedRoutes/RegisteredRoutes";
import AdminRoutes from "./protectedRoutes/AdminRoutes";
import AdminPage from "./pages/AdminPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route element={<Layout />}>
                        <Route element={<RegisteredRoutes />}>
                            <Route path="/home" element={<HomePage />} />
                            <Route
                                path="/alert/new"
                                element={<NewAlertPage />}
                            />
                            <Route
                                path="/alert/update/:id"
                                element={<UpdatePage />}
                            />
                            <Route path="/alert/:id" element={<AlertPage />} />
                            <Route element={<AdminRoutes />}>
                                <Route path="/admin" element={<AdminPage />} />
                                <Route path="admin/register" element={<RegisterPage/>}/>
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
