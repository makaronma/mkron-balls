import { useRef, useState, useEffect } from "react";
import Ball from "./Ball";
import useBalls from "../hooks/useBalls";

const BallContainer = () => {
  const containerRef = useRef();
  const [balls, setBalls] = useState([]);

  // INIT balls
  useEffect(() => {
    const redBall = {
      id: 1,
      r: 5,
      x: 10,
      y: 75,
      speedX: 1,
      speedY: 0,
      friction: 0.008,
      bounce: 0.4,
      color: "red",
    };
    const greenBall = {
      id: 2,
      r: 5,
      x: 25,
      y: 80,
      speedX: -2,
      speedY: 0,
      friction: 0.008,
      bounce: 0.4,
      color: "green",
    };
    const blueBall = {
      id: 3,
      r: 5,
      x: 80,
      y: 80,
      speedX: -3,
      speedY: 0,
      friction: 0.008,
      bounce: 0.4,
      color: "blue",
    };
    const purpleBall = {
      id: 4,
      r: 5,
      x: 80,
      y: 40,
      speedX: -3,
      speedY: 0,
      friction: 0.008,
      bounce: 0.4,
      color: "purple",
    };
    const yellowBall = {
      id: 5,
      r: 5,
      x: 0,
      y: 0,
      speedX: 3,
      speedY: 0,
      friction: 0.008,
      bounce: 0.4,
      color: "yellow",
    };
    setBalls([redBall, greenBall, blueBall, purpleBall, yellowBall]);
    // setBalls([redBall, greenBall]);
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
