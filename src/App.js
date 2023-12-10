import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import {useState} from "react";
import PrivateRoute from "./route/PrivateRoute";

/**
 * - 데모
 * https://noona-hnm.netlify.app/
 */
function App() {
    const [authenticate, setAuthenticate] = useState(false); // true면 로그인이 됨

    return (
        <div>
            <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/> {/* 안 바뀌게 고정 */}
            <Routes>
                <Route path="/" element={<ProductAll />} />
                <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
                <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
            </Routes>
        </div>
    );
}

export default App;
