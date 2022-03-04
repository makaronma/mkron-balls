import { useState, useEffect } from "react";

const Ball = ({ ball, containerRef }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [speedX, setSpeedX] = useState(0);
  const [speedY, setSpeedY] = useState(0);
  const [gravitySpeed, setGravitySpeed] = useState(-0.05);
  const [containerWidth, setContainerWidth] = useState(600);

  // INIT
  useEffect(() => {
    setX(ball.x);
    setY(ball.y);
    setSpeedX(ball.speedX);
    setSpeedY(ball.speedY);
    setContainerWidth(containerRef.current.clientWidth);
  }, [ball, containerRef]);

  // const gravity = -0.05;
  // const diameter = ball.r * 2;
  // const { r, friction } = ball;

  // useEffect(() => {
  // const interval = setInterval(() => {
  // // friction
  // if (y <= 0) {
  //   if (Math.abs(speedX) > friction) {
  //     setSpeedX((pSpeedX) =>
  //       pSpeedX > 0 ? pSpeedX - friction : pSpeedX + friction
  //     );
  //   } else {
  //     setSpeedX(0);
  //   }
  // }

  // // Horizontal
  // setX((prevX) => prevX + speedX);
  // if (x < 0) {
  //   setX(0);
  //   setSpeedX((pSpeedX) => -pSpeedX * ball.bounce);
  // }
  // if (x > 100 - diameter) {
  //   setX(100 - diameter);
  //   setSpeedX((pSpeedX) => -pSpeedX * ball.bounce);
  // }

  // Vertical
  // if (y >= 0) {
  //   // Add Gravity
  //   setY((prevY) => prevY + speedY + gravitySpeed);
  //   setGravitySpeed((pGravitySpeed) => pGravitySpeed + gravity);
  // } else {
  //   // Detect Hit Bottom
  //   setY(0);
  //   setGravitySpeed((pGravitySpeed) => -(pGravitySpeed * ball.bounce));
  // }

  // Collision with balls

  // }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [ball, diameter, friction, gravity, gravitySpeed, speedX, speedY, x, y]);

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="ball"
      style={{
        fill: ball.color,
        width: `${10}%`,
        transform: `translate(${(x * containerWidth) / 100}px,${
          (-y * containerWidth) / 100
        }px)`,
      }}
    >
      <circle cx="50" cy="50" r="50" />
    </svg>
  );
};

export default Ball;
