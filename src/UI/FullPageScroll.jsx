import React, { useRef } from 'react';

const FullPageScroll = ({ children }) => {
  const containerRef = useRef(null);
  const isScrolling = useRef(false);



  const handleScroll = (e) => {
    if (containerRef.current && !isScrolling.current) {
      isScrolling.current = true;
      const container = containerRef.current;
      const deltaY = e.deltaY;

      // Зменшуємо коефіцієнт зміни позиції для менш швидкої прокрутки
      const scrollSpeed = 0.2;
      const targetScrollTop = container.scrollTop + deltaY / scrollSpeed;

      // Плавно прокручуємо контейнер до нової позиції
      container.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });

      // Затримка для відновлення властивості isScrolling після завершення прокрутки
      setTimeout(() => {
        isScrolling.current = false;
      }, 100); // Налаштуйте час затримки за потреби
    }
  };

  return (
    <div className='container' ref={containerRef} onWheel={handleScroll}>
      {children}
    </div>
  );
};

export default FullPageScroll;
