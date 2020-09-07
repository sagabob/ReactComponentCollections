import React from "react";
import { Row, Col } from "antd";
import LocalDrawer from "./Drawer";
import { Switch, Route } from "react-router-dom";
import routes from "../routes/Routes";
import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <Row>
        <Col className="leftnav" md={4} xs={24} sm={24} xl={4}>
          <LocalDrawer />
        </Col>
        <Col md={18} xs={24} sm={24} xl={14}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Container;
