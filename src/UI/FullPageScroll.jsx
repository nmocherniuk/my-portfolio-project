import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

const FullPageScroll = ({ children }) => {
  const overlay = useSelector(state => state.navigation.isOpen);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);
  useEffect(()=> {
    containerRef.current.tabIndex = 0;
    containerRef.current.focus();
  },[])



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
    <div id="container" className='container' ref={containerRef}  onWheel={handleScroll} >
      {children}
    </div>
  );
};

export default FullPageScroll;
