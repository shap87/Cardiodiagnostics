export const animations = {
  fadeIn: {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 },
  },
  fromTop: {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, y: -100 },
  },
  fromBottom: {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, y: 100 },
  },
  fromRight: {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
    hidden: { opacity: 0, x: 200 },
  },
  fromLeft: {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
    hidden: { opacity: 0, x: -200 },
  },
}
