import styled from "styled-components";

export const SectionBannerThird = styled.section`
  width: 100vw;
  display: flex;
  margin-bottom: 60px;
  .div-img {
    width: 50%;
  }
  img {
    width: 100%;
    height: 868px;
    object-fit: cover;
  }
  .banner-third-info {
    width: 50%;
    display: flex;
    align-items: center;
    background: rgba(247, 247, 247, 0.4);
    padding-left: 40px;
    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    h1 {
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 700;
      font-size: 92.1471px;
      line-height: 92px;

      color: var(--color-black);
      display: flex;
      flex-direction: column;
    }
    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 137.69%;

      color: var(--color-black);
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
      background: var(--color-black);
      border: 1px solid var(--color-black);

      font-family: var(--font-main);
      font-style: normal;
      font-weight: 700;
      font-size: 11.7143px;
      line-height: 18px;
      color: var(--color-white);
    }
  }
`;
