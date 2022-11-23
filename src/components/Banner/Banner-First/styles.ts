import styled from "styled-components";
import woman from "../../../assets/beauty-woman.svg";

export const SectionBannerFirst = styled.section`
  width: 100vw;
  height: 765px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${woman});
  background-size: 1150px 765px;
  background-repeat: no-repeat;
  background-clip: border-box;
  background-position: top;
  background-color: #d5b69a;
  .div-banner-first {
    display: flex;
    justify-content: center;
    width: 90%;
    align-items: center;
    .icon-arrow {
      width: 40px;
      height: 50px;
      color: var(--color-white);
      cursor: pointer;
    }
  }

  .div-banner-info {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .img-base {
      width: 401px;
      height: 401px;
      z-index: 1;
    }
    .img-beauty-woman {
      width: 800px;
      height: 780px;
      z-index: -1;
    }
    h1 {
      height: 184px;

      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 700;
      font-size: 92.1471px;
      line-height: 92px;
      display: flex;
      flex-direction: column;
      color: var(--color-white);
    }
    button {
      width: 180px;
      height: 50px;
      margin-top: 20px;

      font-family: var(--font-main);
      font-style: normal;
      font-weight: 700;
      font-size: 11.7143px;
      line-height: 18px;
      background-color: transparent;

      text-align: center;
      text-transform: uppercase;
      color: var(--color-white);
      border: 2px solid var(--color-white);
    }
  }
`;
