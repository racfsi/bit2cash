import React from "react";
import Swiper from "react-id-swiper";
// Version <= 2.3.2
import "react-id-swiper/lib/styles/css/swiper.css";
// Version >= 2.4.0
import "swiper/css/swiper.css";

const SwipeableList = ({ children, scrollElement, threshold }) => {
  const [blockSwipe, setBlockSwipe] = useState(false);

  useEffect(() => {
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchend", handleDragEnd);

    return () => {
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, []);

  useEffect(() => {
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollElement]);

  const handleDragStart = () => setBlockSwipe(false);

  const handleDragEnd = () => setBlockSwipe(false);

  const handleScroll = () => setBlockSwipe(true);

  return (
    <div
      className={styles.swipeableList}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
      onScroll={handleScroll}
      data-testid="list-wrapper"
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { blockSwipe, threshold })
      )}
    </div>
  );
};

SwipeableList.propTypes = {
  children: PropTypes.node,
  scrollElement:
    typeof EventTarget !== "undefined"
      ? PropTypes.instanceOf(EventTarget)
      : PropTypes.any,
  threshold: PropTypes.number
};

export default SwipeableList;
