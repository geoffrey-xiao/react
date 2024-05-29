import Editor from "dnd-email-editor";

import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Preview from "./Preview";
const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return <Preview />;
};
export default App;

//
