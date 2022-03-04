import { useEffect } from "react";

const GRAVITY = -0.02;

function getAngle(dy, dx) {
  return Math.atan2(dy, dx); // range (-PI, PI]
}

const processBall = (ball, otherBalls) => {
  const { x, y, r, speedX, speedY, friction, bounce } = ball;
  let newX = x,
    newY = y,
    newSpeedX = speedX,
    newSpeedY = speedY;

  // Vertical
  if (newY >= 0) {
    // Check whether ball is stable
    if (newSpeedY > -0.5 && newSpeedY < 0.5 && newY < 0.5) {
      newSpeedY = 0;
    } else {
      // Add Gravity
      newY += speedY;
      newSpeedY += GRAVITY;
    }
  } else {
    // Detect Hit Bottom
    newY = 0;
    newSpeedY *= -bounce;
  }

  // Horizontal
  newX += speedX;
  if (newX < 0) {
    newX = 0;
    newSpeedX *= -bounce;
  } else if (newX > 100 - r * 2) {
    newX = 100 - r * 2;
    newSpeedX *= -bounce;
  } else if (
    newSpeedX > -0.5 &&
    newSpeedX < 0.5 &&
    newX < 0.5 &&
    newX > 100 - r * 2 + 0.5
  ) {
    newSpeedY = 0;
  }

  // Friction
  if (newY <= 0) {
    if (Math.abs(newSpeedX) > friction) {
      newSpeedX = newSpeedX > 0 ? newSpeedX - friction : newSpeedX + friction;
    } else {
      newSpeedX = 0;
    }
  }

  // Collision with balls
  // Overlap Detection
  const center = { x: x + r, y: y + r };
  otherBalls.forEach((ballB) => {
    const ballBCenter = { x: ballB.x + r, y: ballB.y + r };
    const dy = ballBCenter.y - center.y;
    const dx = ballBCenter.x - center.x;
    const distance = Math.hypot(dx, dy);
    // Check overlap
    const overlap = r * 2 - distance;
    if (overlap > 0) {
      // Reset position caused by overlapping
      const overlapPrecent = overlap / r / 2 / 2;
      newY -= dy * overlapPrecent;
      newX -= dx * overlapPrecent;

      const halfPercent = overlapPrecent * 0.5;

      newSpeedX -= dx * halfPercent;
      newSpeedY -= dy * halfPercent;
    }
  });

  const newBall = {
    ...ball,
    x: newX,
    y: newY,
    speedX: newSpeedX,
    speedY: newSpeedY,
  };

  return newBall;
};

const useBalls = (setBalls) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setBalls((pBalls) => {
        const newBalls = pBalls.map((ball) => {
          return processBall(
            ball,
            pBalls.filter((b) => b.id !== ball.id)
          );
        });
        return newBalls;
      });
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [setBalls]);

  return;
};

export default useBalls;
