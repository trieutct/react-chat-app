import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingUpPage from "./pages/SingUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route paht="/" element={<HomePage />} />
                <Route paht="/singup" element={<SingUpPage />} />
                <Route paht="/login" element={<LoginPage />} />
                <Route paht="/settings" element={<SettingsPage />} />
                <Route paht="/profile" element={<ProfilePage />} />
            </Routes>
        </div>
    );
};

export default App;
