import styled from "styled-components";

export const LiCard = styled.li`
  width: 266px;
  height: 509px;
  margin-bottom: 30px;
  .div-img {
    width: 100%;
    height: 311px;
    background-color: rgba(247, 247, 247, 0.5);
    border: 0.5px solid #f2f2f2;
  }
  .div-img-new {
    width: 100%;
    height: 311px;
    background: rgba(255, 255, 255, 0.4);
    border: 0.5px solid #ffffff;
  }
  .div-icon {
    padding: 15px 15px 0px 0px;
    display: flex;
    justify-content: end;
    .icon-heart {
      width: 25px;
      height: 25px;
      color: var(--gray-1);
    }

    figure {
      width: 100%;
      padding-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 198px;
      height: 198px;
    }
  }
  .div-card-info {
    margin-top: 6px;
  }
  .card-info-desc {
    font-family: var(--font-secondary);
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: var(--color-black);
  }
  .card-info-stars {
    color: #009baa;
    display: flex;
    gap: 1px;
    padding: 5px 0px 13px 0px;
    .star {
      width: 14px;
      height: 14px;
    }
  }
  .card-info-price {
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

  button {
    margin-top: 10px;
    padding: 20px 30px;
    width: 268px;
    height: 58px;
    background: #ffffff;
    border: 2px solid #f2994a;

    font-family: var(--font-main);
    font-style: normal;
    font-weight: 700;
    font-size: 11.7143px;
    line-height: 18px;
    color: #f2994a;
    text-align: center;
  }
  button:hover {
    transition: 1s;
    background: #f2994a;
    color: var(--color-white);
  }
`;
