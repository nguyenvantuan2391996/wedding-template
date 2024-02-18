import React from "react";
import { Divider } from "antd";
import { PhoneTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import GroovePaper from "../Assets/GroovePaper.png";

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding-left: 42px;
  padding-right: 42px;
  padding-bottom: 18px;
  width: 100%;
  text-align: center;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const SubContent = styled.p`
  font-size: 1.3vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 24px;
`;

const ContactButton = styled.div`
  display: inline-block;
  text-align: center;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
`;

const Content = styled.p`
  font-size: 1.5vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 24px;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Thông tin liên hệ</Title>
      </Divider>
      <Content>
        Vui lòng liên hệ chú rể và cô dâu theo thông tin số điện thoại phía
        dưới.
      </Content>
      <ContactButton
        onClick={() => {
          window.location.href = "tel://0968298850";
        }}
      >
        <PhoneTwoTone
          style={{ fontSize: 64, marginBottom: 16 }}
          twoToneColor="#829fe0"
        />
        <br />
        <SubContent>Chú rể</SubContent>
      </ContactButton>
      <ContactButton
        onClick={() => {
          window.location.href = "tel://0866828220";
        }}
      >
        <PhoneTwoTone
          style={{ fontSize: 64, marginBottom: 16 }}
          twoToneColor="#fe7daf"
        />
        <br />
        <SubContent>Cô dâu</SubContent>
      </ContactButton>
    </Wrapper>
  );
};

export default Contact;
