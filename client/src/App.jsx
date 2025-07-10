import "./App.css";
import RecentArticles from "./pages/RecentArticles";

import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Article from "./pages/Article";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<RecentArticles />} />
                    <Route path="/article/:id" element={<Article/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
