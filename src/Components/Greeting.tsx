import React from "react";
import { Divider } from "antd";
import styled from "styled-components";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../Config";
import GroovePaper from "../Assets/GroovePaper.png";

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Gretting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>Câu chuyện tình yêu</Title>
      </Divider>
      <Content>
        Tình yêu của chúng tôi bắt đầu từ những buổi trò chuyện dài hơi, những
        cuộc đi dạo trên bãi biển và những buổi tối dành cho việc ngồi bên nhau,
        chia sẻ về cuộc sống và ước mơ. Từng khoảnh khắc cùng em là những kỷ
        niệm quý giá, là những khoảnh khắc tuyệt vời mà tôi sẽ không bao giờ
        quên.
        <br />
        <br />
        Và rồi, trong một buổi tối lãng mạn dưới ánh trăng, tôi đã đặt ra câu
        hỏi quan trọng nhất cuộc đời: "Em sẽ kết hôn với tôi không?" Sự ngạc
        nhiên và niềm vui trong đôi mắt của cô ấy khiến tôi biết rằng câu trả
        lời chỉ có thể là "có".
      </Content>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>Thông tin</Title>
      </Divider>
      <GroomBride>
        <strong>{GROOM_NAME}</strong>
        <br />
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}
        <br />
        <strong>{BRIDE_NAME}</strong>
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}
      </GroomBride>
    </Wrapper>
  );
};

export default Gretting;
