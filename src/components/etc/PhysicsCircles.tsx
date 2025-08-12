import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

interface BallInput {
  text: string;
  color: string;
  size: string;
}

interface BallData {
  body: Matter.Body;
  radius: number;
  color: string;
  label: string;
  isPressed: boolean;
  isReleased: boolean;
}

interface Props {
  data?: BallInput[];
}

const parseSize = (size: string, containerWidth: number, containerHeight: number): number => {
  if (size.endsWith('px')) {
    return parseFloat(size);
  } else if (size.endsWith('vw')) {
    return (parseFloat(size) / 100) * containerWidth;
  } else if (size.endsWith('vh')) {
    return (parseFloat(size) / 100) * containerHeight;
  } else if (size.endsWith('%')) {
    return (parseFloat(size) / 100) * containerWidth;
  } else {
    return parseFloat(size); // fallback
  }
};


const PhysicsCircles: React.FC<Props> = ({ data = [] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [balls, setBalls] = useState<BallData[]>([]);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const draggingBallRef = useRef<BallData | null>(null);
  const lastMousePosRef = useRef<{ x: number; y: number } | null>(null);

  const initializeWorld = () => {
    if (!containerRef.current) return;

    const bounds = containerRef.current.getBoundingClientRect();
    const width = bounds.width;
    const height = bounds.height;

    const engine = Matter.Engine.create();
    const runner = Matter.Runner.create();
    const world = engine.world;

    // 🌌 무중력 설정
    engine.gravity.x = 0;
    engine.gravity.y = 0;

    engineRef.current = engine;
    runnerRef.current = runner;

    const wallThickness = 30;
    const ground = Matter.Bodies.rectangle(width / 2, height - wallThickness / 2, width, wallThickness, { isStatic: true });
    const ceiling = Matter.Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true });
    const leftWall = Matter.Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true });
    const rightWall = Matter.Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true });
    Matter.World.add(world, [ground, ceiling, leftWall, rightWall]);

    const newBalls: BallData[] = [];

    for (const item of data) {
      const radius = parseSize(item.size, width, height);
      const color = item.color;
      const label = item.text;
    
      // 🎯 겹침 허용: 위치 랜덤 배치만 수행
      const x = Math.random() * (width - radius) + radius / 2;
      const y = Math.random() * (height - radius) + radius / 2;
    
      const body = Matter.Bodies.circle(x, y, radius / 2, {
        restitution: 1,
        frictionAir: 0,
        label,
        collisionFilter: {
          group: -1, // 같은 group끼리는 충돌하지 않음
        },
      });
    
      // 🚀 랜덤 초기 속도 부여
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      });
    
      Matter.World.add(world, body);
      newBalls.push({ body, radius, color, label, isPressed: false, isReleased: false });
    }

    setBalls(newBalls);
    Matter.Runner.run(runner, engine);

    const update = () => {
      setBalls([...newBalls]);
      requestAnimationFrame(update);
    };
    update();
  };

  const cleanupWorld = () => {
    if (engineRef.current) {
      Matter.World.clear(engineRef.current.world, false);
      Matter.Engine.clear(engineRef.current);
      engineRef.current = null;
    }
    if (runnerRef.current) {
      Matter.Runner.stop(runnerRef.current);
      runnerRef.current = null;
    }
  };

  useEffect(() => {
    initializeWorld();

    const handleResize = () => {
      cleanupWorld();
      initializeWorld();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cleanupWorld();
    };
  }, []);

  const handleDown = (ball: BallData, x: number, y: number) => {
    draggingBallRef.current = ball;
    lastMousePosRef.current = { x, y };
    Matter.Body.setStatic(ball.body, true);
    ball.isPressed = true;
    ball.isReleased = false;
  };

  const handleMove = (x: number, y: number) => {
    const ball = draggingBallRef.current;
    if (!ball) return;
    Matter.Body.setPosition(ball.body, { x, y });
    lastMousePosRef.current = { x, y };
  };

  const handleUp = (x: number, y: number) => {
    const ball = draggingBallRef.current;
    const lastPos = lastMousePosRef.current;
    if (!ball || !lastPos) return;

    const dx = x - lastPos.x;
    const dy = y - lastPos.y;

    Matter.Body.setStatic(ball.body, false);
    Matter.Body.applyForce(ball.body, ball.body.position, {
      x: dx * 0.001,
      y: dy * 0.001,
    });

    ball.isPressed = false;
    ball.isReleased = true;

    setTimeout(() => {
      ball.isReleased = false;
    }, 300);

    draggingBallRef.current = null;
    lastMousePosRef.current = null;
  };

  const handleMouseDown = (ball: BallData, e: React.MouseEvent) => {
    handleDown(ball, e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX, e.clientY);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    handleUp(e.clientX, e.clientY);
  };

  const handleTouchStart = (ball: BallData, e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDown(ball, touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    const lastPos = lastMousePosRef.current;
    if (!lastPos) return;
    handleUp(lastPos.x, lastPos.y);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {balls.map((ball, i) => {
        const scale = ball.isPressed ? 0.9 : ball.isReleased ? 1.1 : 1;
        return (
          <div
            key={i}
            onMouseDown={(e) => handleMouseDown(ball, e)}
            onTouchStart={(e) => handleTouchStart(ball, e)}
            style={{
              position: 'absolute',
              left: ball.body.position.x - ball.radius / 2,
              top: ball.body.position.y - ball.radius / 2,
              width: ball.radius,
              height: ball.radius,
              color: ball.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              pointerEvents: 'auto',
              cursor: 'grab',
              userSelect: 'none',
              transform: `scale(${scale})`,
              transition: 'transform 0.3s cubic-bezier(0.25, 1.5, 0.5, 1)',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(173,216,230,0.3), rgba(0,0,0,0))',
              boxShadow: 'inset 0 0 10px rgba(255,255,255,0.5), 0 0 15px rgba(173,216,230,0.4), 0 0 30px rgba(255,255,255,0.2)',
              backdropFilter: 'blur(2px)',
              border: '1px solid rgba(255,255,255,0.3)'
            }}
          >
            {ball.label}
          </div>
        );
      })}
    </div>
  );
};

export default PhysicsCircles;
