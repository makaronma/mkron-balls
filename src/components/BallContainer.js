import { useRef, useState, useEffect } from "react";
import Ball from "./Ball";
import useBalls from "../hooks/useBalls";

const NUMBALLS = 100;

const getRanNum = (min, max) => {
  return Math.random() * (max - min) + min;
};

const BallContainer = () => {
  const containerRef = useRef();
  const [balls, setBalls] = useState([]);

  // INIT balls
  useEffect(() => {
    let newBalls = [];
    for (let i = 0; i < NUMBALLS; i++) {
      const ranColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      const newBall = {
        id: i,
        r: 5,
        x: i,
        y: getRanNum(90, 3000),
        speedX: getRanNum(-3, 3),
        speedY: 0,
        friction: 0.008,
        bounce: getRanNum(0.4,0.6),
        color: ranColor,
      };
      newBalls.push(newBall);
    }
    setBalls(newBalls);
  }, []);

  useBalls(setBalls);

  return (
    <div className="ballContainer" ref={containerRef}>
      {balls.map((ball, index) => (
        <Ball key={`ball-${index}`} ball={ball} containerRef={containerRef} />
      ))}
    </div>
  );
};

export default BallContainer;
