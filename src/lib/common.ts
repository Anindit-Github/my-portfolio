export const springTransition = (delay = 0, duration = 0.5) => ({
    type: "spring",
    bounce: 0.3,
    duration: duration + delay,
    ease: [0, 0.71, 0.2, 1.01],
  });