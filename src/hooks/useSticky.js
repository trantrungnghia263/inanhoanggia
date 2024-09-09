import { useState, useEffect } from "react";

const useSticky = (ref, offset = 0) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollTop = window.scrollY;
        const elementOffsetTop = ref.current.offsetTop;
        const elementHeight = ref.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        if (
          scrollTop + offset > elementOffsetTop &&
          scrollTop + offset < elementOffsetTop + elementHeight - viewportHeight
        ) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, offset]);

  return isSticky;
};

export default useSticky;
