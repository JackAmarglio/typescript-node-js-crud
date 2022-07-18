import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import CreateItem from "../components/CreateItem";
import AboutItem from "../components/AboutItem";

const AppRoutes = () => (
  <>
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route>
          <Route path="/" element={<Dashboard />} />
          <Route path="/createItem" element={<CreateItem />} />
          <Route path="/about/:id" element={<AboutItem />} />
        </Route>
      </Routes>
    </Suspense>
  </>
);

export default AppRoutes;
