// 1. Cursor Component
import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    let animationFrame;

    const updateCursor = () => {
      if (cursor) {
        cursor.style.transform = `translate3d(${position.x - 12}px, ${position.y - 12}px, 0)`;
      }
      animationFrame = requestAnimationFrame(updateCursor);
    };

    updateCursor();
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-300 ease-out"
    />
  );
}
