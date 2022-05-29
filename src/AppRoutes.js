import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LandingPage, Page404, SignInPage } from "pages";
import { ROUTE_PATHS } from "lib/constants";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTE_PATHS.HOME} element={<LandingPage />} />
        <Route exact path={ROUTE_PATHS.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE_PATHS.ERROR_404} element={<Page404 />} />
      </Routes>
    </Router>
  );
};
