import styled from "styled-components";

export const SectionSecondHeader = styled.section`
  width: 100vw;
  background-color: var(--color-white);
  height: 90px;
  display: flex;
  justify-content: center;

  img {
    width: 216px;
    height: 45px;
    object-fit: cover;
  }

  .div-wrap-second {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .div-center-header {
    display: flex;
  }
  .div-input {
    min-width: 399px;
    height: 37px;
    background-color: var(--gray-input);
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 26px;

    .icon-search {
      color: var(--color-black);
      width: 17.77px;
      height: 17.77px;
    }
  }
  .input-header {
    border-radius: 100px;
    height: 100%;
    width: 80%;
    background-color: var(--gray-input-2);
    border: none;
    outline: none;
    padding-left: 23px;

    ::placeholder {
      font-family: var(--font-main);
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 22px;
      color: var(--gray-1);
    }
  }
  .div-left-header {
    display: flex;
    align-items: center;
  }
  .div-rigth-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 32px;

    div {
      display: flex;
      align-items: flex-end;
      height: 26px;
      h2 {
        font-family: var(--font-main);
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 22px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: var(--gray-1);
        span {
          font-family: var(--font-main);
          font-style: normal;
          font-weight: 600;
          font-size: 9px;
          height: 15px;
        }
      }
      .icon-userline {
        width: 19px;
        height: 23px;
        margin-right: 7px;
      }
      .icon-heart {
        width: 21px;
        height: 19.43px;
        margin-right: 11px;
      }
      .icon-shoppingbag {
        color: var(--color-golden);
        width: 22px;
        height: 25.5px;
        margin-right: 11px;
      }
      .div-amount {
        background-color: #b90032;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        position: relative;
        z-index: 1;
        bottom: 10px;
        left: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          width: 100%;
          height: 100%;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 700;
          font-size: 9px;
          line-height: 22px;
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;
