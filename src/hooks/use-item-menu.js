import { useState } from "react";

const useItemMenu = () => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const onMouseEnter = () => {
    setMouseEnter(true);
  };

  const onMouseLeave = () => {
    setMouseEnter(false);
  };

  return {
    mouseEnter,
    onMouseEnter,
    onMouseLeave,
  };
};

export default useItemMenu;
