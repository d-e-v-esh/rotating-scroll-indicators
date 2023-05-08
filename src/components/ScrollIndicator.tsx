import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { GiAbstract038 } from "react-icons/gi";

const ScrollIndicator = () => {
  const { scrollY } = useScroll();

  const transformedScrollYLeft = useTransform(scrollY, [0, 100], [0, -30], {
    clamp: false,
  });
  const transformedScrollYRight = useTransform(scrollY, [0, 100], [0, 30], {
    clamp: false,
  });

  const springPhysics = {
    damping: 22,
    mass: 0.1,
    stiffness: 200,
    bounce: 0.5,
    duration: 0.4,
    velocity: 100,
  };

  const rotationLeft = useSpring(transformedScrollYLeft, springPhysics);

  const rotationRight = useSpring(transformedScrollYRight, springPhysics);

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

export default ScrollIndicator;
