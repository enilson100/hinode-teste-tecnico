import styled from "styled-components";

export const SectionFooterSecond = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  .div-footer-register {
    height: 152px;
    background: #00002d;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: center;
    div {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  h3 {
    font-family: "Roboto Flex", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: -1px;
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    margin-right: 60px;
  }
  form {
    display: flex;
    align-items: center;
    gap: 20px;

    input {
      border: 0;
      border-bottom: 1px solid var(--color-white);
      width: 207px;
      outline: none;
      background-color: #00002d;
      color: var(--color-white);
      ::placeholder {
        font-family: var(--font-main);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 23px;
        color: var(--color-white);
      }
    }
  }
  .div-footer-info {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #e1dcd5;
    padding-top: 120px;
    height: 422px;

    .div-wrap-info {
      display: flex;
      width: 80%;
      justify-content: space-between;
    }
    h6 {
      font-family: var(--font-main);
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 22px;
      color: var(--grat-1);
      margin-bottom: 15px;
    }
    p {
      font-family: var(--font-main);
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
    }
    .div-icon {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      gap: 20px;
    }
    .icon-footer {
      width: 40px;
      height: 40px;
      color: #00002d;
    }
    .parag-end {
      margin-top: 20px;
    }
  }
  .div-info-end {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 50px;

    .div-img-end {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 50px;
    }
  }
`;

export const ButtonFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  height: 48px;
  background: #009baa;
  cursor: pointer;

  font-family: var(--font-main);
  font-style: normal;
  font-weight: 700;
  font-size: 11.7143px;
  line-height: 18px;
  color: var(--color-white);
  :hover {
    filter: contrast(0.8);
  }
`;
