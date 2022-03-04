import { useRef, useState } from "react";
import Ball from "./Ball";

const BallContainer = () => {
  const containerRef = useRef()
  const [balls, setBalls] = useState([
    { id: 1, x: 10, y: 80, r: 5, speedX: 2, speedY: 0, friction:0.001, bounce:0.3, color: "red" },
    // { id: 2, x: 40, y: 10, r: 5, speedX: 0, speedY: 0, friction:0.05, bounce:0.3, color: "green" },
    // { id: 3, x: 80, y: 10, r: 5, speedX: 0, speedY: 0, friction:0.05, bounce:0.3, color: "blue" },
    // { id: 4, x: 30, y: 100, r: 5, speedX: 0, speedY: 0, friction:0.05, bounce:0.3, color: "yellow" },
  ]);

  return (
    <div className="ballContainer" ref={containerRef}>
      {balls.map((ball, index) => (
        <Ball key={`ball-${index}`} ball={ball} containerRef={containerRef}/>
      ))}
    </div>
  );
};

export default BallContainer;
