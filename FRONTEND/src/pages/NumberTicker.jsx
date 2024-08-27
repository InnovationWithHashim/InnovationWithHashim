import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function NumberTicker({
  value,
  direction = "up",
  className,
  delay = 0,
}) {
  const ref = useRef(null); // Updated for plain JavaScript
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    });
  }, [springValue]);

  return (
    <span
      className={`inline-block tabular-nums text-black dark:text-white tracking-wider ${className || ''}`}
      ref={ref}
    />
  );
}
