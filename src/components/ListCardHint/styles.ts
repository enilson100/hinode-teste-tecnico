import styled from "styled-components";

export const SectionListCardHint = styled.li`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-family: var(--font-secondary);
    font-style: normal;
    font-weight: 300;
    font-size: 46px;
    letter-spacing: 3px;
    color: var(--color-black);
    text-align: center;
    margin-bottom: 40px;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;
