import styled from "styled-components";
import womanrelaxing from "../../../assets/woman-relaxing.png";

export const SectionBannerSecond = styled.section`
  width: 100vw;
  height: 813px;
  background: url(${womanrelaxing});
  .banner-info {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    margin-left: 100px;
  }
  h2 {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 700;
    font-size: 92.1471px;
    line-height: 92px;
    display: flex;
    flex-direction: column;
    color: var(--color-white);
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 137.69%;
    color: var(--color-white);
    display: flex;
    flex-direction: column;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    width: 249px;
    height: 50px;
    background-color: transparent;
    border: 2px solid var(--color-white);

    font-family: var(--font-main);
    font-style: normal;
    font-weight: 700;
    font-size: 11.7143px;
    text-transform: uppercase;

    line-height: 18px;
    color: var(--color-white);
  }
`;
