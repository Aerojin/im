import React from "react";
import { Flex } from "antd";
import Header from "../Header";
import Content from "../Content/index.tsx";
import Footer from "../Footer";
import SideBar from "../SideBar";
import "./index.css";

const Layout = () => {
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
