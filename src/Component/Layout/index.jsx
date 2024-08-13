import React from "react";
import { Button, Popover } from "antd";
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";
import "./index.css";

const Layout = (props) => {
  const { children } = props || {};

  console.log(111);

  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
