import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TextAnimation3 = ({ children, Tag = 'div', className = '' }) => {
  const textRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            gsap.fromTo(
              textRef.current.querySelectorAll('.text-slide-up-animation-text-3'),
              { skewY: '2deg' },
              {
                translateY: '-200%',
                skewY: '0deg',
                duration: 1.5,
                ease: 'power4.out',
              },
            );
            hasAnimated.current = true;
          }
        });
      },
      { threshold: 0.1 },
    );

    if (textRef.current) {
      const words = children.split(' ');
      textRef.current.textContent = '';

      words.forEach((word, index) => {
        const spanWrapper = document.createElement('span');
        spanWrapper.className = 'text-slide-up-animation-wrapper-3';

        const spanContent = document.createElement('span');
        spanContent.className = 'text-slide-up-animation-content-3';

        const span = document.createElement('span');
        span.className = 'text-slide-up-animation-text-3';
        span.textContent = word;

        spanContent.appendChild(span);
        spanWrapper.appendChild(spanContent);
        textRef.current.appendChild(spanWrapper);

        // Додаємо пробіл після кожного слова, крім останнього
        if (index !== words.length - 1) {
          textRef.current.appendChild(document.createTextNode(' '));
        }
      });

      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [children]);

  // return <div ref={textRef} className={`${className} text-slide-up-animation-3`}></div>;
  return <Tag ref={textRef} className={`${className} text-slide-up-animation-3`}></Tag>;
};

export default TextAnimation3;
