import Home from "../pages/Home";
import DemoSlider1 from "../../demo/DemoSlider1";
import Component from "../pages/Component";

const routes = [
  {
    path: "/slider1",
    component: DemoSlider1,
    label: "Slider 1",
    category: "Sliders",
  },
  {
    path: "/",
    component: Home,
    label: "Home",
    category: null,
  },
  {
    path: "/comp",
    component: Component,
    label: "Components",
    category: "Buttons",
  },
];

export default routes;
