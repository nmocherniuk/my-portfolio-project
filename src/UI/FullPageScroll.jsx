import React, { useRef, useEffect } from 'react';

const FullPageScroll = ({ children }) => {
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    containerRef.current.tabIndex = 0;
    containerRef.current.focus();
  }, []);

  const handleScroll = (e) => {
    if (containerRef.current && !isScrolling.current) {
      isScrolling.current = true;
      const container = containerRef.current;
      const deltaY = e.deltaY;

      const scrollSpeed = 0.2;
      const targetScrollTop = container.scrollTop + deltaY / scrollSpeed;

      container.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 100);
    }
  };

  return (
    <div id='container' className='container' ref={containerRef} onWheel={handleScroll}>
      {children}
    </div>
  );
};

export default FullPageScroll;
