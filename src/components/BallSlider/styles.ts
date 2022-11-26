import styled from "styled-components";

export const BallSlider = styled.div`
  margin: -20px 0px 20px 0px;
  width: 100vw;
  padding: 20px 0px;
  .ball-slider-list {
    display: flex;
    z-index: 1;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 15px;
  }
  .ball-checked {
    width: 22.5px;
    height: 12px;

    background: #aa8232;
    border: 1px solid #aa8232;
    border-radius: 10px;
  }
  .ball {
    height: 10.5px;
    width: 10.5px;
    border-radius: 50%;
    border: 1.5px solid #aa8232;
  }
`;
