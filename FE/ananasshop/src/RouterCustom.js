import Home from "./pages/users/Home/Home";
import MainLayout from "./pages/users/theme/MainLayout/MainLayout";
import { ROUTERS } from "./utils/router";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/users/Profile/Profile";
const renderUserCustom = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <Home />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <Profile />,
    },
  ];
  return (
    <MainLayout>
      <Routes>
        {userRouters.map(({path, component}) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </MainLayout>
  );
};

function RouterCustom() {
  return renderUserCustom();
}
export default RouterCustom;
