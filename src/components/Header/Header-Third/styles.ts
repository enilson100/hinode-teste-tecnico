import styled from "styled-components";

export const SectionThirdHeader = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-golden);
  height: 49px;
  nav {
    width: 80%;
  }

  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    li {
      color: var(--color-white);
      display: flex;
      align-items: center;
      gap: 16px;
      a {
        text-decoration: none;
        color: var(--color-white);
        font-family: var(--font-main);
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
      }
      .icon-bars {
        width: 20px;
        height: 22px;
      }
    }
  }
`;
