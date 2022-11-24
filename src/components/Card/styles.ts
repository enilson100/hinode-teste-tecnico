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
    .div-icon {
      padding: 10px 10px 0px 0px;
      width: 100%;
      display: flex;
      justify-content: end;
      .icono-heart {
        width: 21px;
        height: 19.43px;
        color: var(--gray-1);
      }
    }
    figure {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 198px;
      height: 198px;
    }
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
  }
`;