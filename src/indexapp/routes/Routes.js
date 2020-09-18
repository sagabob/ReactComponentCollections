import Home from "../pages/Home";
import DemoSlider1 from "../../demo/sliders/01/DemoSlider";
import DemoSlider2 from "../../demo/sliders/02/DemoSlider";
import Component from "../pages/Component";

const routes = [
  {
    path: "/slider1",
    component: DemoSlider1,
    label: "Slider 1",
    category: "Sliders",
  },
  {
    path: "/slider2",
    component: DemoSlider2,
    label: "Slider 2",
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
