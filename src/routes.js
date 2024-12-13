import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewBook from "./Pages/NewBook";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NewBook/>} />
            </Routes>
        </BrowserRouter>
    )
}