import Home from "pages/home";
import type { RouteObject } from "react-router";
import { useRoutes } from "react-router-dom";
import WrapperRouteComponent from "./WrapperRouteComponent";
const routeList: RouteObject[] = [
  {
    path: "/",
    element: <WrapperRouteComponent element={<Home />} />,
  },
];
const RenderRouter = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
