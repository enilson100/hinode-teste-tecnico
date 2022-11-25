import styled from "styled-components";

export const LiCardHint = styled.li`
  width: 267px;
  height: 540px;
  cursor: pointer;
  :hover {
    .div-hint-hover {
      display: flex;
      flex-direction: column;
    }
    h3 {
      display: none;
    }
    img {
      transition: 1s;
      filter: brightness(50%);
    }
  }

  img {
    width: 267px;
    height: 540px;
  }
  .div-hint-hover {
    display: none;
    position: relative;
    bottom: 360px;
    left: 55px;
    p {
      font-family: var(--font-main);
      font-style: normal;
      font-weight: 400;
      font-size: 15.4839px;
      line-height: 21px;
      position: relative;
      left: 40px;
      margin-top: 20px;
      text-decoration-line: underline;
      color: var(--color-white);
    }
  }

  div {
    width: 150px;
  }
  h3 {
    z-index: 1;
    font-family: var(--font-secondary);
    font-style: normal;
    font-weight: 400;
    font-size: 23.2px;
    letter-spacing: 2.9px;
    text-align: center;
    position: relative;
    color: var(--color-white);

    bottom: 90px;
    left: 55px;
  }
  .more-top {
    bottom: 120px;
  }
  h4 {
    z-index: 1;
    font-family: var(--font-secondary);
    font-style: normal;
    font-weight: 400;
    font-size: 23.2px;
    letter-spacing: 2.9px;
    text-align: center;

    color: var(--color-white);
  }
`;
