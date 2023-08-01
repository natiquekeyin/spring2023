import { useRef } from "react";

const useSmoothScroll = () => {
  const ref = useRef();
  const smoothScroll = () => ref.current.scrollIntoView({ behavior: "smooth" });
  return [ref, smoothScroll];
};

export default useSmoothScroll;
