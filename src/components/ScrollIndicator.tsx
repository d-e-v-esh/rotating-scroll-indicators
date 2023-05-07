import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { GiAbstract038 } from "react-icons/gi";

export const ScrollIndicator = () => {
  const { scrollY } = useScroll();

  const transformedScrollYLeft = useTransform(
    scrollY,
    [0, 100000],
    [0, -30000]
  );
  const transformedScrollYRight = useTransform(
    scrollY,
    [0, 100000],
    [0, 30000]
  );

  const rotationLeft = useSpring(transformedScrollYLeft, {
    damping: 22,
    mass: 0.1,
    stiffness: 200,
    bounce: 0.5,
    duration: 0.4,
    velocity: 100,
  });

  const rotationRight = useSpring(transformedScrollYRight, {
    damping: 22,
    mass: 0.1,
    stiffness: 200,
    bounce: 0.5,
    duration: 0.4,
    velocity: 100,
  });

  return (
    <div
      style={{
        color: "lightgray",
      }}>
      <motion.div
        initial="hidden"
        animate="show"
        exit="hidden"
        className="scrollIndicatorRight"
        style={{
          rotate: rotationLeft,
          position: "fixed",
          fontSize: "1.2rem",
          right: "10rem",
          bottom: "4rem",
          userSelect: "none",
          zIndex: 10,
        }}>
        (scroll)
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        exit="hidden"
        className="scrollIndicatorLeft"
        style={{
          rotate: rotationRight,
          position: "fixed",
          height: "1.5rem",
          width: "1.5rem",
          left: "10rem",
          bottom: "4rem",
          userSelect: "none",
          zIndex: 10,
        }}>
        <GiAbstract038 size={"1.5rem"} />
      </motion.div>
    </div>
  );
};
