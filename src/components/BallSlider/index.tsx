import { BallSlider } from "./styles";

const Balls = () => {
  return (
    <BallSlider>
      <div className="ball-slider-list">
        <div className="ball-checked"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </BallSlider>
  );
};
export default Balls;
