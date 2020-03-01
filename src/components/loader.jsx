import React from "react";
import { Row, Icon } from "antd";

const Loader = () => (
  <Row type="flex" justify="center" align="middle" className="full-height">
    <Icon type="loading" className="sec-color-text" style={{ fontSize: 48 }} />
  </Row>
);

export default Loader;
