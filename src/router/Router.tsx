import { Route, Routes } from "react-router-dom";
import Detail from "../page/Detail";
import Home from "../page/Home";
import RouteType from "./Route.type";

const routes: RouteType[] = [
  {
    component: <Home />,
    path: "/",
  },
  {
    component: <Detail />,
    path: "/detail/:name",
  },
];

export default function Router() {
  const renderRoutes = routes.map((route: RouteType, index: number) => (
    <Route path={route.path} element={route.component} key={index} />
  ));

  return <Routes>{renderRoutes}</Routes>;
}
