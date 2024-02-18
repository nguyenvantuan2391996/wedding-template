import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import {
//   WEDDING_DATE,
//   WEDDING_LOCATION,
//   GROOM_NAME,
//   BRIDE_NAME,
// } from "../Config";
import BackgroundVideo from "../Assets/BackgroundVideo.mp4";

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0px auto;
  position: relative;
`;

const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: -1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const VideoBackground = styled.video`
  background-color: #aeb8b3 !important;
  opacity: 0.9;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  min-height: 480px;
`;
//
// const WeddingInvitation = styled.p`
//   font-size: 1.5vh;
//   opacity: 0.45;
//   margin-bottom: 16px;
// `;
//
// const GroomBride = styled.p`
//   font-size: 3.5vh;
//   font-weight: bold;
//   opacity: 0.9;
//   margin-bottom: 16px;
// `;

const Schedule = styled.p`
  font-size: 2vh;
  opacity: 0.65;
  margin-bottom: 24px;
`;

const Title = () => {
  const calculateTimeUntilWedding = () => {
    const weddingDate = new Date("2024-02-27T00:00:00");
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [countdown, setCountdown] = useState(calculateTimeUntilWedding());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateTimeUntilWedding());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src={BackgroundVideo} type="video/mp4" />
      </VideoBackground>
      <TitleWrapper>
        {/*<WeddingInvitation>Thiệp mời cưới</WeddingInvitation>*/}
        {/*<GroomBride>*/}
        {/*  {GROOM_NAME} &#38; {BRIDE_NAME}*/}
        {/*</GroomBride>*/}
        <Schedule>
          {/*{WEDDING_DATE}*/}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {countdown.days +
            " days" +
            " : " +
            countdown.hours +
            " hours" +
            " : " +
            countdown.minutes +
            " minutes" +
            " : " +
            countdown.seconds +
            " seconds"}
          <br/>
          {"18/01 âm tức ngày 27/02 năm 2024"}
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
};

export default Title;
