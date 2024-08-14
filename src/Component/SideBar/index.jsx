import React from "react";
import { Row, Col, Image, Divider } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./index.css";

const CompanyInfo = () => {
  return (
    <di className="wdk-im-sidebar-company-info">
      <Row wrap={false}>
        <Col>
          <Image
            width={50}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col className="company-name">北京京東叁佰陸拾電子商務有限公司</Col>
      </Row>
      <Row className="mt10">
        <Col span={6}>企业码：</Col>
        <Col>1234567891234536</Col>
      </Row>
      <Row>
        <Col span={6}>账号：</Col>
        <Col>123456789</Col>
      </Row>
    </di>
  );
};

const CommonProblem = () => {
  return (
    <ul className="common-problem">
      <li className="common-problem-title">常见问题</li>
      <li>
        <a href="#">怎么成为采购商</a>
      </li>
      <li>
        <a href="#">网站购买该如何支付</a>
      </li>
      <li>
        <a href="#">我的采购货物到哪里了？</a>
      </li>
    </ul>
  );
};

const SiderBar = (props) => {
  const { children } = props || {};

  return (
    <div className="wdk-im-sidebar">
      <CompanyInfo />
      <Divider className="wdk-im-sidebar-divider" />
      <CommonProblem />
      <CloseOutlined style={{ fontSize: 20 }} className="wdk-im-close" />
    </div>
  );
};

export default SiderBar;
