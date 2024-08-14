import React from "react";
import { Button, Popover, Flex } from "antd";
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";
import SideBar from "../SideBar";
import "./index.css";

const Layout = (props) => {
  const { children } = props || {};

  console.log(111);

  return (
    <Flex gap={0} className="wdk-im-layout" horizontal>
      <Flex vertical="vertical" className="wdk-im-body">
        <Header />
        <Content />
        <Footer />
      </Flex>
      <Flex vertical="vertical" className="wdk-im-sidebar">
        <SideBar />
      </Flex>
    </Flex>
  );
};

export default Layout;
