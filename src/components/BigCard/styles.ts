import styled from "styled-components";

export const ContainerBigCard = styled.div`
  display: flex;
  width: 100vw;
  margin: 100px 0px 100px 0px;
  align-items: center;
  flex-direction: column;
  height: 781px;
  img {
    width: 557px;
    height: 781px;
  }
  .big-card-wrap {
    display: flex;
    gap: 20px;
  }
  .big-card-info {
    position: relative;
    bottom: 775px;
    left: 10px;
    width: 222px;
    height: 184px;

    background-color: var(--color-white);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    .div-big-card {
      padding: 10px 0px 10px 10px;
      .big-card-info-stars {
        color: #009baa;
        display: flex;
        gap: 1px;
        padding: 15px 0px 27px 0px;
      }
    }
    h5 {
      font-family: var(--font-secondary);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      color: var(--color-black);
      display: flex;
      flex-direction: column;
    }
    .big-card-info-price {
      font-family: "Roboto Flex", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 18px;
      color: var(--color-black);
      span {
        font-family: "Roboto Flex", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        height: 10px;
        bottom: 7px;
        position: relative;
      }
    }
    .portion {
      padding: 2px;
      font-family: "Roboto Flex", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 23px;

      color: #828282;
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    width: 268px;
    background-color: #ffffff;
    border: 2px solid #f2994a;

    position: relative;
    bottom: 300px;
    left: 145px;
    font-family: var(--font-main);
    font-style: normal;
    font-weight: 700;
    font-size: 11.7143px;
    line-height: 18px;

    color: #f2994a;
    :hover {
      transition: 1s;
      background: #f2994a;
      color: var(--color-white);
    }
  }
  .div-balls {
    margin-top: -200px;
  }
  .div-arrow {
    display: flex;
    .arrow {
      margin: 350px 30px;
      width: 35.37px;
      height: 39.88px;
      color: #bdbdbd;
      cursor: pointer;
    }
  }
`;
