import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import UserContext from "./context/user";
import ProtectedRoute from "./helpers/protected-route";
import IsUserLoggedIn from "./helpers/is-user-logged-in";
import useAuthListener from "./hooks/use-auth-listener";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <ProtectedRoute user={user}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.LOGIN}
            element={
              <IsUserLoggedIn
                user={user}
                loggedInPath={ROUTES.DASHBOARD}
                path={ROUTES.LOGIN}
              >
                <Login />
              </IsUserLoggedIn>
            }
          />
          <Route
            path={ROUTES.SIGN_UP}
            element={
              <IsUserLoggedIn
                user={user}
                loggedInPath={ROUTES.DASHBOARD}
                path={ROUTES.SIGN_UP}
              >
                <Signup />
              </IsUserLoggedIn>
            }
          />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </UserContext.Provider>
  );
}

export default App;
