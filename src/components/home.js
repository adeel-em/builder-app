import * as React from "react";
import styled from "styled-components";

const Div = styled.div`
  border-radius: 30px;
  box-shadow: 10px 10px 25px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 61px 0;
`;

const Div2 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 51px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div3 = styled.div`
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div4 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 18%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div5 = styled.div`
  display: flex;
  gap: 0px;
  font-size: 30px;
  color: #00a2a1;
  font-weight: 700;
  padding: 0 2px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div6 = styled.div`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  margin: auto 0;
`;

const Div7 = styled.div`
  stroke-width: 3px;
  border-color: rgba(0, 162, 161, 1);
  border-style: solid;
  border-width: 3px;
  border-radius: 50%;
  width: 110px;
  height: 108px;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 36%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div8 = styled.div`
  display: flex;
  margin-top: 35px;
  flex-grow: 1;
  flex-direction: column;
  color: #161616;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div9 = styled.div`
  font: 700 47px Poppins, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Div10 = styled.div`
  margin-top: 14px;
  font: 400 18px Poppins, sans-serif;
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 47%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div11 = styled.div`
  display: flex;
  margin-top: 33px;
  flex-grow: 1;
  gap: 13px;
  @media (max-width: 991px) {
    margin-top: 40px;
    flex-wrap: wrap;
  }
`;

const Div12 = styled.div`
  border-radius: 50px;
  background-color: #f6f6f6;
  align-self: start;
  display: flex;
  gap: 14px;
  font-size: 24px;
  color: #969696;
  font-weight: 400;
  white-space: nowrap;
  flex-grow: 1;
  flex-basis: auto;
  padding: 13px 17px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 27px;
`;

const Div13 = styled.div`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div14 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
`;

const Div15 = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 52px;
  background-color: #f6f6f6;
  border-radius: 50%;
  align-self: start;
  height: 52px;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 54px;
`;

const Div16 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const Div17 = styled.div`
  color: #161616;
  font: 600 18px Poppins, sans-serif;
`;

const Div18 = styled.div`
  display: flex;
  margin-top: 6px;
  gap: 5px;
  font-size: 12px;
  color: #00a2a1;
  font-weight: 400;
`;

const Div19 = styled.div`
  font-family: Poppins, sans-serif;
`;

const Img4 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 9px;
  align-self: start;
`;

const Div20 = styled.div`
  color: #000;
  align-self: end;
  margin-top: 13px;
  font: 400 12px Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const Div21 = styled.div`
  align-self: center;
  display: flex;
  margin-top: 8px;
  width: 100%;
  max-width: 1112px;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div22 = styled.div`
  color: #161616;
  align-self: end;
  margin-top: 25px;
  flex-grow: 1;
  flex-basis: auto;
  font: 700 24px Poppins, sans-serif;
`;

const Div23 = styled.div`
  align-self: start;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div24 = styled.div`
  align-self: end;
  display: flex;
  margin-top: 25px;
  gap: 5px;
  font-size: 18px;
  color: #969696;
  font-weight: 400;
  text-align: right;
`;

const Div25 = styled.div`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
`;

const Img5 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 23px;
`;

const Div26 = styled.div`
  align-self: start;
  display: flex;
  gap: 15px;
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div27 = styled.div`
  border-radius: 15px;
  background-color: #00a2a1;
  display: flex;
  gap: 5px;
  padding: 11px 13px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div28 = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  flex-grow: 1;
`;

const Div29 = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 500;
`;

const Div30 = styled.div`
  border-radius: 15px;
  background-color: #00a2a1;
  display: flex;
  gap: 6px;
  padding: 9px 8px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div31 = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  flex-grow: 1;
`;

const Div32 = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 500;
`;

const Div33 = styled.div`
  align-self: center;
  margin-top: 24px;
  width: 100%;
  max-width: 1411px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div34 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 83%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div35 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 27px;
  }
`;

const Div36 = styled.div`
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div37 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 21%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div38 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  font-weight: 400;
  white-space: nowrap;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const Div39 = styled.div`
  border-radius: 15px;
  background-color: #00a2a1;
  display: flex;
  gap: 17px;
  color: #fff;
  padding: 16px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img6 = styled.img`
  aspect-ratio: 0.93;
  object-fit: auto;
  object-position: center;
  width: 25px;
`;

const Div40 = styled.div`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const Div41 = styled.div`
  display: flex;
  margin-top: 38px;
  flex-direction: column;
  align-items: start;
  color: #969696;
  padding: 0 63px 0 15px;
  @media (max-width: 991px) {
    padding-right: 20px;
    white-space: initial;
  }
`;

const Div42 = styled.div`
  display: flex;
  gap: 17px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img7 = styled.img`
  aspect-ratio: 1.19;
  object-fit: auto;
  object-position: center;
  width: 25px;
`;

const Div43 = styled.div`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div44 = styled.div`
  display: flex;
  margin-top: 53px;
  gap: 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const Img8 = styled.img`
  aspect-ratio: 0.73;
  object-fit: auto;
  object-position: center;
  width: 19px;
`;

const Div45 = styled.div`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const Div46 = styled.div`
  display: flex;
  margin-top: 54px;
  gap: 16px;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const Img9 = styled.img`
  aspect-ratio: 1.12;
  object-fit: auto;
  object-position: center;
  width: 27px;
  align-self: start;
`;

const Div47 = styled.div`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div48 = styled.div`
  display: flex;
  margin-top: 51px;
  gap: 18px;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const Img10 = styled.img`
  aspect-ratio: 1.12;
  object-fit: auto;
  object-position: center;
  width: 28px;
  align-self: start;
`;

const Div49 = styled.div`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div50 = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 17px;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const Img11 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 25px;
  align-self: start;
`;

const Div51 = styled.div`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Column6 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 79%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div52 = styled.div`
  flex-grow: 1;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div53 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column7 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 23%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div54 = styled.div`
  disply: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 0.58;
  flex-grow: 1;
  padding-top: 80px;
  font-weight: 400;
`;

const Img12 = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div55 = styled.div`
  position: relative;
  border-radius: 30px 0px 30px 30px;
  background-color: #fcfcfc;
  z-index: 10;
  display: flex;
  margin-top: 324px;
  gap: 12px;
  padding: 9px 80px 9px 10px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding-right: 20px;
  }
`;

const Img13 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 50px;
  border-radius: 50%;
`;

const Div56 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const Div57 = styled.div`
  color: #161616;
  font: 24px Poppins, sans-serif;
`;

const Div58 = styled.div`
  color: #969696;
  margin-top: 7px;
  font: 12px Poppins, sans-serif;
`;

const Column8 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 54%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div59 = styled.div`
  z-index: 10;
  display: flex;
  flex-grow: 1;
  padding-bottom: 18px;
  flex-direction: column;
  align-items: start;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Img14 = styled.img`
  aspect-ratio: 0.57;
  object-fit: auto;
  object-position: center;
  width: 272px;
  border-radius: 30px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.15);
  margin-left: 72px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Img15 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
`;

const Column9 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 23%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img16 = styled.img`
  aspect-ratio: 0.57;
  object-fit: auto;
  object-position: center;
  width: 100%;
  border-radius: 30px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.15);
  flex-grow: 1;
`;

const Div60 = styled.div`
  margin-top: 12px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div61 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column10 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 24%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div62 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: #969696;
  @media (max-width: 991px) {
    margin-top: 27px;
  }
`;

const Div63 = styled.div`
  align-self: start;
  display: flex;
  margin-left: 39px;
  gap: 17px;
  font-size: 25px;
  font-weight: 400;
  white-space: nowrap;
  @media (max-width: 991px) {
    margin-left: 10px;
    white-space: initial;
  }
`;

const Img17 = styled.img`
  aspect-ratio: 0.93;
  object-fit: auto;
  object-position: center;
  width: 25px;
  align-self: start;
`;

const Div64 = styled.div`
  font-family: Poppins, sans-serif;
`;

const Div65 = styled.div`
  border-radius: 15px 15px 0px 0px;
  background-color: #00a2a1;
  z-index: 10;
  display: flex;
  margin-top: 25px;
  width: 100%;
  gap: 20px;
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  white-space: nowrap;
  justify-content: space-between;
  padding: 13px 25px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div66 = styled.div`
  display: flex;
  gap: 9px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img18 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 36px;
  border-radius: 50%;
`;

const Div67 = styled.div`
  font-family: Poppins, sans-serif;
  margin: auto 0;
`;

const Div68 = styled.div`
  background-color: #3aff66;
  border-radius: 50%;
  width: 11px;
  height: 11px;
  margin: auto 0;
`;

const Div69 = styled.div`
  border-radius: 15px;
  background-color: #f6f6f6;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 42px 0 18px;
`;

const Div70 = styled.div`
  border-radius: 5px;
  background-color: #fcfcfc;
  align-self: end;
  display: flex;
  margin-right: 20px;
  align-items: start;
  gap: 12px;
  padding: 9px 5px 3px;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const Div71 = styled.div`
  margin-top: 10px;
  font: 300 8px Poppins, sans-serif;
`;

const Div72 = styled.div`
  text-align: right;
  font: 400 12px Poppins, sans-serif;
`;

const Div73 = styled.div`
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  padding: 0 23px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const Div74 = styled.div`
  border-radius: 5px;
  background-color: #fcfcfc;
  display: flex;
  gap: 17px;
  padding: 10px 10px 0;
`;

const Div75 = styled.div`
  font: 400 12px Poppins, sans-serif;
`;

const Div76 = styled.div`
  text-align: right;
  align-self: start;
  margin-top: 9px;
  font: 300 8px Poppins, sans-serif;
`;

const Div77 = styled.div`
  border-radius: 5px;
  background-color: #fcfcfc;
  align-self: end;
  display: flex;
  margin-top: 16px;
  gap: 13px;
  padding: 9px 5px 3px;
`;

const Div78 = styled.div`
  align-self: start;
  margin-top: 10px;
  font: 300 8px Poppins, sans-serif;
`;

const Div79 = styled.div`
  text-align: right;
  flex-grow: 1;
  flex-basis: auto;
  font: 400 12px Poppins, sans-serif;
`;

const Div80 = styled.div`
  border-radius: 6px;
  background-color: #fcfcfc;
  display: flex;
  margin-top: 251px;
  gap: 20px;
  font-size: 12px;
  font-weight: 400;
  padding: 4px 3px 4px 11px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div81 = styled.div`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const Img19 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 23px;
`;

const Column11 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 76%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div82 = styled.div`
  border-radius: 44px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  margin-top: 8px;
  flex-grow: 1;
  padding-right: 23px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 35px;
  }
`;

const Div83 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column12 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 67%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img20 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 37px;
  }
`;

const Column13 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div84 = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  font-size: 12px;
  font-weight: 400;
  margin: auto 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div85 = styled.div`
  display: flex;
  gap: 12px;
  font-size: 24px;
  color: #161616;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img21 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 50px;
  border-radius: 50%;
`;

const Div86 = styled.div`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const Div87 = styled.div`
  display: flex;
  margin-top: 28px;
  gap: 8px;
  color: #199bc5;
`;

const Div88 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div89 = styled.div`
  font-family: Poppins, sans-serif;
`;

const Img22 = styled.img`
  aspect-ratio: 4;
  object-fit: auto;
  object-position: center;
  width: 80px;
  margin-top: 10px;
`;

const Img23 = styled.img`
  aspect-ratio: 0.71;
  object-fit: auto;
  object-position: center;
  width: 15px;
  align-self: end;
  margin-top: 76px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div90 = styled.div`
  color: #161616;
  font-family: Poppins, sans-serif;
  margin-top: 14px;
`;

const Div91 = styled.div`
  color: #969696;
  font-family: Poppins, sans-serif;
  margin-top: 14px;
`;

const Div92 = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 8px;
  color: #000;
  font-weight: 700;
`;

const Div93 = styled.div`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Img24 = styled.img`
  aspect-ratio: 0.09;
  object-fit: auto;
  object-position: center;
  width: 11px;
  align-self: start;
  @media (max-width: 991px) {
    display: none;
  }
`;

const Div94 = styled.div`
  color: #969696;
  margin-top: 5px;
  font: 10px Poppins, sans-serif;
`;

const Div95 = styled.div`
  color: #969696;
  font-family: Poppins, sans-serif;
  margin-top: 12px;
`;

const Div96 = styled.div`
  border-radius: 4px;
  background-color: #fdfdfd;
  display: flex;
  margin-top: 7px;
  gap: 20px;
  padding: 8px 9px;
`;

const Div97 = styled.div`
  color: #161616;
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div98 = styled.div`
  color: #199bc5;
  text-align: right;
  font-family: Poppins, sans-serif;
`;

const Column14 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 17%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div99 = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 28px;
  }
`;

const Div100 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 18px;
  color: #969696;
  font-weight: 500;
  padding: 0 42px 0 13px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div101 = styled.div`
  color: #161616;
  font: 700 24px Poppins, sans-serif;
`;

const Div102 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 33px;
`;

const Div103 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 18px;
`;

const Div104 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 19px;
`;

const Div105 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 24px;
`;

const Div106 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 20px;
`;

const Div107 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 20px;
`;

const Div108 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 23px;
`;

const Div109 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 18px;
`;

const Div110 = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  margin-top: 30px;
`;

const Div111 = styled.div`
  border-radius: 15px;
  background-color: #f6f6f6;
  display: flex;
  margin-top: 55px;
  flex-direction: column;
  color: #969696;
  padding: 13px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div112 = styled.div`
  text-align: center;
  align-self: center;
  font: 700 18px Poppins, sans-serif;
`;

const Div113 = styled.div`
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  margin-top: 8px;
  flex-direction: column;
  font-size: 12px;
  font-weight: 400;
  padding: 9px 0 9px 12px;
`;

const Div114 = styled.div`
  font-family: Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-right: 7px;
  }
`;

const Img25 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 9px;
  align-self: end;
  margin-top: 41px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div115 = styled.div`
  display: flex;
  margin-top: 37px;
  flex-direction: column;
  align-items: start;
  padding: 0 48px 0 13px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div116 = styled.div`
  color: #161616;
  font: 700 18px Poppins, sans-serif;
`;

const Div117 = styled.div`
  display: flex;
  margin-top: 23px;
  gap: 14px;
  @media (max-width: 991px) {
    margin-left: 6px;
  }
`;

const Div118 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img26 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 47px;
  border-radius: 50%;
`;

const Img27 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 47px;
  border-radius: 50%;
  margin-top: 16px;
`;

const Img28 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 47px;
  border-radius: 50%;
  margin-top: 15px;
`;

const Div119 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #969696;
  font-weight: 500;
  margin: auto 0;
`;

const Div120 = styled.div`
  font-family: Poppins, sans-serif;
`;

const Div121 = styled.div`
  font: 400 10px Poppins, sans-serif;
`;

const Div122 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 39px;
`;

const Div123 = styled.div`
  margin-top: 6px;
  font: 400 10px Poppins, sans-serif;
`;

const Div124 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 38px;
`;

const Div125 = styled.div`
  margin-top: 4px;
  font: 400 10px Poppins, sans-serif;
`;

const Div126 = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 14px;
  color: #969696;
`;

const Img29 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 47px;
  border-radius: 50%;
`;

const Div127 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const Div128 = styled.div`
  font: 500 14px Poppins, sans-serif;
`;

const Div129 = styled.div`
  margin-top: 6px;
  font: 400 10px Poppins, sans-serif;
`;

const Div130 = styled.div`
  color: #161616;
  text-align: center;
  align-self: center;
  margin-top: 65px;
  font: 700 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div131 = styled.div`
  color: #969696;
  text-align: center;
  align-self: end;
  margin-top: 23px;
  font: 700 36px Poppins, sans-serif;
`;

function MyComponent() {
  return (
    <Div>
      <Div2>
        <Div3>
          <Div4>
            <Column>
              <Div5>
                <Div6>
                  Public <span style="color: rgba(0,162,161,1);">space</span>
                </Div6>
                <Div7 />
              </Div5>
            </Column>
            <Column2>
              <Div8>
                <Div9>Hello, Angga</Div9>
                <Div10>Welcome back to your account..</Div10>
              </Div8>
            </Column2>
            <Column3>
              <Div11>
                <Div12>
                  <Img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/71574f61e82cad6ab1c2b013596c69492318048f0555d118473549f8ece28c96?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                  />
                  <Div13>Searching</Div13>
                </Div12>
                <Div14>
                  <Div15>
                    <Img2
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/88ed8be7f95573419d6067fc9bb3d209c9acd9d6ce9ba4be66ec9a6f22416c20?apiKey=84db87ea73d24b04a56ca399af874b1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/88ed8be7f95573419d6067fc9bb3d209c9acd9d6ce9ba4be66ec9a6f22416c20?apiKey=84db87ea73d24b04a56ca399af874b1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/88ed8be7f95573419d6067fc9bb3d209c9acd9d6ce9ba4be66ec9a6f22416c20?apiKey=84db87ea73d24b04a56ca399af874b1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/88ed8be7f95573419d6067fc9bb3d209c9acd9d6ce9ba4be66ec9a6f22416c20?apiKey=84db87ea73d24b04a56ca399af874b1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/88ed8be7f95573419d6067fc9bb3d209c9acd9d6ce9ba4be66ec9a6f22416c20?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/88ed8be7f95573419d6067fc9bb3d209c9acd9d6ce9ba4be66ec9a6f22416c20?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/88ed8be7f95573419d6067fc9bb3d209c9acd9d6ce9ba4be66ec9a6f22416c20?apiKey=84db87ea73d24b04a56ca399af874b1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/88ed8be7f95573419d6067fc9bb3d209c9acd9d6ce9ba4be66ec9a6f22416c20?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                    />
                    <Img3
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bdb7a353450c9efd5494167f2d9b1c12f9aa13079a12f640007b65f3a763de95?apiKey=84db87ea73d24b04a56ca399af874b1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdb7a353450c9efd5494167f2d9b1c12f9aa13079a12f640007b65f3a763de95?apiKey=84db87ea73d24b04a56ca399af874b1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdb7a353450c9efd5494167f2d9b1c12f9aa13079a12f640007b65f3a763de95?apiKey=84db87ea73d24b04a56ca399af874b1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdb7a353450c9efd5494167f2d9b1c12f9aa13079a12f640007b65f3a763de95?apiKey=84db87ea73d24b04a56ca399af874b1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdb7a353450c9efd5494167f2d9b1c12f9aa13079a12f640007b65f3a763de95?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdb7a353450c9efd5494167f2d9b1c12f9aa13079a12f640007b65f3a763de95?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdb7a353450c9efd5494167f2d9b1c12f9aa13079a12f640007b65f3a763de95?apiKey=84db87ea73d24b04a56ca399af874b1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdb7a353450c9efd5494167f2d9b1c12f9aa13079a12f640007b65f3a763de95?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                    />
                    <Div16>
                      <Div17>Angga3565</Div17>
                      <Div18>
                        <Div19>edit profile</Div19>
                        <Img4
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d6340726d269a4f08dea6aff1d188ff0fa2284b572a51d6f37e1dae3811749a?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                        />
                      </Div18>
                    </Div16>
                  </Div15>
                  <Div20>Hi, I am a graphic designer</Div20>
                </Div14>
              </Div11>
            </Column3>
          </Div4>
        </Div3>
        <Div21>
          <Div22>Your friend's story</Div22>
          <Div23>
            <Div24>
              <Div25>Upload your story</Div25>
              <Img5
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1549c0c2eee2189cd905008bbb62e49df606bae5368649a68a235adf558e3a1?apiKey=84db87ea73d24b04a56ca399af874b1a&"
              />
            </Div24>
            <Div26>
              <Div27>
                <Div28>427</Div28>
                <Div29>Followers</Div29>
              </Div27>
              <Div30>
                <Div31>845</Div31>
                <Div32>Following</Div32>
              </Div30>
            </Div26>
          </Div23>
        </Div21>
      </Div2>
      <Div33>
        <Div34>
          <Column4>
            <Div35>
              <Div36>
                <Div37>
                  <Column5>
                    <Div38>
                      <Div39>
                        <Img6
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5c069b303e5c54cba695cb22413a57f6cc8b77958722c460e660f2ff351c74f?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                        />
                        <Div40>Home</Div40>
                      </Div39>
                      <Div41>
                        <Div42>
                          <Img7
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a13cb2ff4280b3e589d48735c2f5325f3d9204b9d25c3386e4d70a77d12155d?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                          />
                          <Div43>Archive</Div43>
                        </Div42>
                        <Div44>
                          <Img8
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c64f1f6895fe418426c01f308b22781e2e38864b6af366ced34874c4198931da?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                          />
                          <Div45>Saved</Div45>
                        </Div44>
                        <Div46>
                          <Img9
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/56ed63bc0c16e7b862d1dcf12dca1537ca42b74d0deeaed7ef90640c43edb7b3?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                          />
                          <Div47>Tagged</Div47>
                        </Div46>
                        <Div48>
                          <Img10
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d847248cfdf24bc505b9e76d093d68abb74f5a8242d0449767d517365bde7b2?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                          />
                          <Div49>Groups</Div49>
                        </Div48>
                        <Div50>
                          <Img11
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a55fdb20d741ca9cb63f3fe0375c84174d67747829c52708373197c705a467?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                          />
                          <Div51>Message</Div51>
                        </Div50>
                      </Div41>
                    </Div38>
                  </Column5>
                  <Column6>
                    <Div52>
                      <Div53>
                        <Column7>
                          <Div54>
                            <Img12
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa08906763d1e4054f764d52bf3dbdaf2d67a40ec54f1e97996144a43cfd430b?apiKey=84db87ea73d24b04a56ca399af874b1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa08906763d1e4054f764d52bf3dbdaf2d67a40ec54f1e97996144a43cfd430b?apiKey=84db87ea73d24b04a56ca399af874b1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa08906763d1e4054f764d52bf3dbdaf2d67a40ec54f1e97996144a43cfd430b?apiKey=84db87ea73d24b04a56ca399af874b1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa08906763d1e4054f764d52bf3dbdaf2d67a40ec54f1e97996144a43cfd430b?apiKey=84db87ea73d24b04a56ca399af874b1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa08906763d1e4054f764d52bf3dbdaf2d67a40ec54f1e97996144a43cfd430b?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa08906763d1e4054f764d52bf3dbdaf2d67a40ec54f1e97996144a43cfd430b?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa08906763d1e4054f764d52bf3dbdaf2d67a40ec54f1e97996144a43cfd430b?apiKey=84db87ea73d24b04a56ca399af874b1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa08906763d1e4054f764d52bf3dbdaf2d67a40ec54f1e97996144a43cfd430b?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                            />
                            <Div55>
                              <Img13
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/04dd949044158bc6768a1ab20447a74b4737d05b5795ec4b26aaec33a2734253?apiKey=84db87ea73d24b04a56ca399af874b1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/04dd949044158bc6768a1ab20447a74b4737d05b5795ec4b26aaec33a2734253?apiKey=84db87ea73d24b04a56ca399af874b1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04dd949044158bc6768a1ab20447a74b4737d05b5795ec4b26aaec33a2734253?apiKey=84db87ea73d24b04a56ca399af874b1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/04dd949044158bc6768a1ab20447a74b4737d05b5795ec4b26aaec33a2734253?apiKey=84db87ea73d24b04a56ca399af874b1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/04dd949044158bc6768a1ab20447a74b4737d05b5795ec4b26aaec33a2734253?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04dd949044158bc6768a1ab20447a74b4737d05b5795ec4b26aaec33a2734253?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/04dd949044158bc6768a1ab20447a74b4737d05b5795ec4b26aaec33a2734253?apiKey=84db87ea73d24b04a56ca399af874b1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/04dd949044158bc6768a1ab20447a74b4737d05b5795ec4b26aaec33a2734253?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                              />
                              <Div56>
                                <Div57>Ellis Haas</Div57>
                                <Div58>Creating story ...</Div58>
                              </Div56>
                            </Div55>
                          </Div54>
                        </Column7>
                        <Column8>
                          <Div59>
                            <Img14
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5e7e47e6ed2f139b6659791be4085cc0b1b00f9e02a3d32f6ca8c9464171db4?apiKey=84db87ea73d24b04a56ca399af874b1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5e7e47e6ed2f139b6659791be4085cc0b1b00f9e02a3d32f6ca8c9464171db4?apiKey=84db87ea73d24b04a56ca399af874b1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5e7e47e6ed2f139b6659791be4085cc0b1b00f9e02a3d32f6ca8c9464171db4?apiKey=84db87ea73d24b04a56ca399af874b1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5e7e47e6ed2f139b6659791be4085cc0b1b00f9e02a3d32f6ca8c9464171db4?apiKey=84db87ea73d24b04a56ca399af874b1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5e7e47e6ed2f139b6659791be4085cc0b1b00f9e02a3d32f6ca8c9464171db4?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5e7e47e6ed2f139b6659791be4085cc0b1b00f9e02a3d32f6ca8c9464171db4?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5e7e47e6ed2f139b6659791be4085cc0b1b00f9e02a3d32f6ca8c9464171db4?apiKey=84db87ea73d24b04a56ca399af874b1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5e7e47e6ed2f139b6659791be4085cc0b1b00f9e02a3d32f6ca8c9464171db4?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                            />
                            <Img15
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a01da1a21bcfb5a7e492f4ec0f9fba10da8d8520c1aa7e11c2851a386da84726?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                            />
                          </Div59>
                        </Column8>
                        <Column9>
                          <Img16
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/13b1f2f716f950ea344993455e482d231e41ca76049c0bcc811cd405f5938236?apiKey=84db87ea73d24b04a56ca399af874b1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/13b1f2f716f950ea344993455e482d231e41ca76049c0bcc811cd405f5938236?apiKey=84db87ea73d24b04a56ca399af874b1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/13b1f2f716f950ea344993455e482d231e41ca76049c0bcc811cd405f5938236?apiKey=84db87ea73d24b04a56ca399af874b1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/13b1f2f716f950ea344993455e482d231e41ca76049c0bcc811cd405f5938236?apiKey=84db87ea73d24b04a56ca399af874b1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/13b1f2f716f950ea344993455e482d231e41ca76049c0bcc811cd405f5938236?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/13b1f2f716f950ea344993455e482d231e41ca76049c0bcc811cd405f5938236?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/13b1f2f716f950ea344993455e482d231e41ca76049c0bcc811cd405f5938236?apiKey=84db87ea73d24b04a56ca399af874b1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/13b1f2f716f950ea344993455e482d231e41ca76049c0bcc811cd405f5938236?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                          />
                        </Column9>
                      </Div53>
                    </Div52>
                  </Column6>
                </Div37>
              </Div36>
              <Div60>
                <Div61>
                  <Column10>
                    <Div62>
                      <Div63>
                        <Img17
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa7f4c93bd93302387f4d89fb325b734990d2adfedd3e650a49e56d7ef36b9f?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                        />
                        <Div64>Setting</Div64>
                      </Div63>
                      <Div65>
                        <Div66>
                          <Img18
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/04cc00d581ea26225047a3393b278a81030ea8790d8c7c8bfd7541c25dacd7cb?apiKey=84db87ea73d24b04a56ca399af874b1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/04cc00d581ea26225047a3393b278a81030ea8790d8c7c8bfd7541c25dacd7cb?apiKey=84db87ea73d24b04a56ca399af874b1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04cc00d581ea26225047a3393b278a81030ea8790d8c7c8bfd7541c25dacd7cb?apiKey=84db87ea73d24b04a56ca399af874b1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/04cc00d581ea26225047a3393b278a81030ea8790d8c7c8bfd7541c25dacd7cb?apiKey=84db87ea73d24b04a56ca399af874b1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/04cc00d581ea26225047a3393b278a81030ea8790d8c7c8bfd7541c25dacd7cb?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04cc00d581ea26225047a3393b278a81030ea8790d8c7c8bfd7541c25dacd7cb?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/04cc00d581ea26225047a3393b278a81030ea8790d8c7c8bfd7541c25dacd7cb?apiKey=84db87ea73d24b04a56ca399af874b1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/04cc00d581ea26225047a3393b278a81030ea8790d8c7c8bfd7541c25dacd7cb?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                          />
                          <Div67>Leonard</Div67>
                        </Div66>
                        <Div68 />
                      </Div65>
                      <Div69>
                        <Div70>
                          <Div71>20:29</Div71>
                          <Div72>Hi, Bro!</Div72>
                        </Div70>
                        <Div73>
                          <Div74>
                            <Div75>Hi, what you doing now ?</Div75>
                            <Div76>20:31</Div76>
                          </Div74>
                          <Div77>
                            <Div78>20:29</Div78>
                            <Div79>I just posted a photo</Div79>
                          </Div77>
                          <Div80>
                            <Div81>Type a message ...</Div81>
                            <Img19
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1549c0c2eee2189cd905008bbb62e49df606bae5368649a68a235adf558e3a1?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                            />
                          </Div80>
                        </Div73>
                      </Div69>
                    </Div62>
                  </Column10>
                  <Column11>
                    <Div82>
                      <Div83>
                        <Column12>
                          <Img20
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/39e12f13b7f7563ffe92ee871c3e8f86f4f8ad50211f27393282deb30ce3aef2?apiKey=84db87ea73d24b04a56ca399af874b1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39e12f13b7f7563ffe92ee871c3e8f86f4f8ad50211f27393282deb30ce3aef2?apiKey=84db87ea73d24b04a56ca399af874b1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39e12f13b7f7563ffe92ee871c3e8f86f4f8ad50211f27393282deb30ce3aef2?apiKey=84db87ea73d24b04a56ca399af874b1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39e12f13b7f7563ffe92ee871c3e8f86f4f8ad50211f27393282deb30ce3aef2?apiKey=84db87ea73d24b04a56ca399af874b1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39e12f13b7f7563ffe92ee871c3e8f86f4f8ad50211f27393282deb30ce3aef2?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39e12f13b7f7563ffe92ee871c3e8f86f4f8ad50211f27393282deb30ce3aef2?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39e12f13b7f7563ffe92ee871c3e8f86f4f8ad50211f27393282deb30ce3aef2?apiKey=84db87ea73d24b04a56ca399af874b1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39e12f13b7f7563ffe92ee871c3e8f86f4f8ad50211f27393282deb30ce3aef2?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                          />
                        </Column12>
                        <Column13>
                          <Div84>
                            <Div85>
                              <Img21
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/769671b0aef46327c84db03b8fe7da2e561961d394dffdf6b97a0e6d55dd4d1f?apiKey=84db87ea73d24b04a56ca399af874b1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/769671b0aef46327c84db03b8fe7da2e561961d394dffdf6b97a0e6d55dd4d1f?apiKey=84db87ea73d24b04a56ca399af874b1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/769671b0aef46327c84db03b8fe7da2e561961d394dffdf6b97a0e6d55dd4d1f?apiKey=84db87ea73d24b04a56ca399af874b1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/769671b0aef46327c84db03b8fe7da2e561961d394dffdf6b97a0e6d55dd4d1f?apiKey=84db87ea73d24b04a56ca399af874b1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/769671b0aef46327c84db03b8fe7da2e561961d394dffdf6b97a0e6d55dd4d1f?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/769671b0aef46327c84db03b8fe7da2e561961d394dffdf6b97a0e6d55dd4d1f?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/769671b0aef46327c84db03b8fe7da2e561961d394dffdf6b97a0e6d55dd4d1f?apiKey=84db87ea73d24b04a56ca399af874b1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/769671b0aef46327c84db03b8fe7da2e561961d394dffdf6b97a0e6d55dd4d1f?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                              />
                              <Div86>Matthew</Div86>
                            </Div85>
                            <Div87>
                              <Div88>
                                <Div89>
                                  I am strong. I am kind. I am smart. I am
                                  important. I am fearless. I am amazing.
                                  <br />.<br />
                                  <span style="color: rgba(25,155,197,1);">
                                    #photo #photography #street #calm
                                  </span>
                                </Div89>
                                <Img22
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/01075afa7a07939acf90ae2fc479e91d2f61fbbf4d4e6dbc0ebfdab0904e1138?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                                />
                              </Div88>
                              <Img23
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/615c39793641236ee23d26d0f3e75d99ae96776baf068454d2377f0be956017c?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                              />
                            </Div87>
                            <Div90>
                              Liked by{" "}
                              <span style="font-weight: 700; color: rgba(22,22,22,1);">
                                Hudson{" "}
                              </span>
                              and
                              <span style="font-weight: 700; color: rgba(22,22,22,1);">
                                {" "}
                                77 others
                              </span>
                            </Div90>
                            <Div91>View all 15 comments</Div91>
                            <Div92>
                              <Div93>
                                Hudson{" "}
                                <span style="font-weight: 400;">
                                  it's awesome
                                </span>
                                <br />
                                <br />
                                Ellis Haas{" "}
                                <span style="font-weight: 400;">
                                  I want this kind of feel.
                                </span>
                                <br />
                                <br />
                                Leonard{" "}
                                <span style="font-weight: 400;">
                                  Where is this?
                                </span>
                                <br />
                                <br />
                                Tannoia
                                <span style="font-weight: 400;">
                                  I also draw on a graphic tablet.
                                  congratulations you are really very good, I
                                  hope to learn a lot.
                                </span>
                              </Div93>
                              <Img24
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65ce4cbe3bfccfa5d72074fd99019a4885c3831ec15c7ee1e9c1d3d2dc2d7d2?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                              />
                            </Div92>
                            <Div94>10 minute 1 like replay</Div94>
                            <Div95>4 Days ago</Div95>
                            <Div96>
                              <Div97>Add a comment ....</Div97>
                              <Div98>Post</Div98>
                            </Div96>
                          </Div84>
                        </Column13>
                      </Div83>
                    </Div82>
                  </Column11>
                </Div61>
              </Div60>
            </Div35>
          </Column4>
          <Column14>
            <Div99>
              <Div100>
                <Div101>#Trends</Div101>
                <Div102>
                  <span style="color: rgba(150,150,150,1);">1. </span>
                  <span style="font-weight: 400; color: rgba(150,150,150,1);">
                    #photography
                  </span>
                </Div102>
                <Div103>
                  <span style="color: rgba(150,150,150,1);">2. </span>
                  <span style="font-weight: 400; color: rgba(150,150,150,1);">
                    #graphicdesign
                  </span>
                </Div103>
                <Div104>
                  <span style="color: rgba(150,150,150,1);">3. </span>
                  <span style="font-weight: 400; color: rgba(150,150,150,1);">
                    #mentalhealth
                  </span>
                </Div104>
                <Div105>
                  <span style="color: rgba(150,150,150,1);">4. </span>
                  <span style="font-weight: 400; color: rgba(150,150,150,1);">
                    #adventure
                  </span>
                </Div105>
                <Div106>
                  <span style="color: rgba(150,150,150,1);">5. </span>
                  <span style="font-weight: 400; color: rgba(150,150,150,1);">
                    #ui/ux
                  </span>
                </Div106>
                <Div107>
                  <span style="color: rgba(150,150,150,1);">6. </span>
                  <span style="font-weight: 400; color: rgba(150,150,150,1);">
                    #covid-19
                  </span>
                </Div107>
                <Div108>
                  <span style="color: rgba(150,150,150,1);">7. </span>
                  <span style="font-weight: 400; color: rgba(150,150,150,1);">
                    #japanmusic
                  </span>
                </Div108>
                <Div109>
                  <span style="color: rgba(150,150,150,1);">8. </span>
                  <span style="font-weight: 400; color: rgba(150,150,150,1);">
                    #workfromhome
                  </span>
                </Div109>
                <Div110>Show more</Div110>
              </Div100>
              <Div111>
                <Div112>Post your story</Div112>
                <Div113>
                  <Div114>Insert your caption and image here ...</Div114>
                  <Img25
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d6340726d269a4f08dea6aff1d188ff0fa2284b572a51d6f37e1dae3811749a?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                  />
                </Div113>
              </Div111>
              <Div115>
                <Div116>suggest friends</Div116>
                <Div117>
                  <Div118>
                    <Img26
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/29cf6662e0e2cf741ec71c0db887d109f0bb851c534ae3d7b033a7d41faa29ed?apiKey=84db87ea73d24b04a56ca399af874b1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/29cf6662e0e2cf741ec71c0db887d109f0bb851c534ae3d7b033a7d41faa29ed?apiKey=84db87ea73d24b04a56ca399af874b1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/29cf6662e0e2cf741ec71c0db887d109f0bb851c534ae3d7b033a7d41faa29ed?apiKey=84db87ea73d24b04a56ca399af874b1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/29cf6662e0e2cf741ec71c0db887d109f0bb851c534ae3d7b033a7d41faa29ed?apiKey=84db87ea73d24b04a56ca399af874b1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/29cf6662e0e2cf741ec71c0db887d109f0bb851c534ae3d7b033a7d41faa29ed?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/29cf6662e0e2cf741ec71c0db887d109f0bb851c534ae3d7b033a7d41faa29ed?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/29cf6662e0e2cf741ec71c0db887d109f0bb851c534ae3d7b033a7d41faa29ed?apiKey=84db87ea73d24b04a56ca399af874b1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/29cf6662e0e2cf741ec71c0db887d109f0bb851c534ae3d7b033a7d41faa29ed?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                    />
                    <Img27
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1def0771bd6eebf737c738dba3e7c254c7c868f20e86ed5db21be15d208a2531?apiKey=84db87ea73d24b04a56ca399af874b1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1def0771bd6eebf737c738dba3e7c254c7c868f20e86ed5db21be15d208a2531?apiKey=84db87ea73d24b04a56ca399af874b1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1def0771bd6eebf737c738dba3e7c254c7c868f20e86ed5db21be15d208a2531?apiKey=84db87ea73d24b04a56ca399af874b1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1def0771bd6eebf737c738dba3e7c254c7c868f20e86ed5db21be15d208a2531?apiKey=84db87ea73d24b04a56ca399af874b1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1def0771bd6eebf737c738dba3e7c254c7c868f20e86ed5db21be15d208a2531?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1def0771bd6eebf737c738dba3e7c254c7c868f20e86ed5db21be15d208a2531?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1def0771bd6eebf737c738dba3e7c254c7c868f20e86ed5db21be15d208a2531?apiKey=84db87ea73d24b04a56ca399af874b1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1def0771bd6eebf737c738dba3e7c254c7c868f20e86ed5db21be15d208a2531?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                    />
                    <Img28
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7efa8728a9494641ea6c03b9e0d6b74e60602ad58747d4bac436b7bc67ccc2dd?apiKey=84db87ea73d24b04a56ca399af874b1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7efa8728a9494641ea6c03b9e0d6b74e60602ad58747d4bac436b7bc67ccc2dd?apiKey=84db87ea73d24b04a56ca399af874b1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7efa8728a9494641ea6c03b9e0d6b74e60602ad58747d4bac436b7bc67ccc2dd?apiKey=84db87ea73d24b04a56ca399af874b1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7efa8728a9494641ea6c03b9e0d6b74e60602ad58747d4bac436b7bc67ccc2dd?apiKey=84db87ea73d24b04a56ca399af874b1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7efa8728a9494641ea6c03b9e0d6b74e60602ad58747d4bac436b7bc67ccc2dd?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7efa8728a9494641ea6c03b9e0d6b74e60602ad58747d4bac436b7bc67ccc2dd?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7efa8728a9494641ea6c03b9e0d6b74e60602ad58747d4bac436b7bc67ccc2dd?apiKey=84db87ea73d24b04a56ca399af874b1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7efa8728a9494641ea6c03b9e0d6b74e60602ad58747d4bac436b7bc67ccc2dd?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                    />
                  </Div118>
                  <Div119>
                    <Div120>Andrew Wang</Div120>
                    <Div121>Add as a friend</Div121>
                    <Div122>Rebecca</Div122>
                    <Div123>Add as a friend</Div123>
                    <Div124>Salmunih_</Div124>
                    <Div125>Add as a friend</Div125>
                  </Div119>
                </Div117>
                <Div126>
                  <Img29
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3237bf838561399d87224a670ce786f7928b8779c23b3a7945c4c690fd609055?apiKey=84db87ea73d24b04a56ca399af874b1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3237bf838561399d87224a670ce786f7928b8779c23b3a7945c4c690fd609055?apiKey=84db87ea73d24b04a56ca399af874b1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3237bf838561399d87224a670ce786f7928b8779c23b3a7945c4c690fd609055?apiKey=84db87ea73d24b04a56ca399af874b1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3237bf838561399d87224a670ce786f7928b8779c23b3a7945c4c690fd609055?apiKey=84db87ea73d24b04a56ca399af874b1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3237bf838561399d87224a670ce786f7928b8779c23b3a7945c4c690fd609055?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3237bf838561399d87224a670ce786f7928b8779c23b3a7945c4c690fd609055?apiKey=84db87ea73d24b04a56ca399af874b1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3237bf838561399d87224a670ce786f7928b8779c23b3a7945c4c690fd609055?apiKey=84db87ea73d24b04a56ca399af874b1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3237bf838561399d87224a670ce786f7928b8779c23b3a7945c4c690fd609055?apiKey=84db87ea73d24b04a56ca399af874b1a&"
                  />
                  <Div127>
                    <Div128>Liza4653</Div128>
                    <Div129>Add as a friend</Div129>
                  </Div127>
                </Div126>
                <Div130>Stopwatch</Div130>
                <Div131>02:15:17</Div131>
              </Div115>
            </Div99>
          </Column14>
        </Div34>
      </Div33>
    </Div>
  );
}

export default MyComponent;
