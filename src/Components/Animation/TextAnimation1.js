import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TextAnimation1 = ({ children, className = '' }) => {
  const textRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            gsap.fromTo(
              '.text-slide-up-animation-text-1',
              { skewY: '20deg' },
              {
                translateY: '-200%',
                skewY: '0deg',
                duration: 1,
                ease: 'power4.out',
                stagger: 0.2,
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
      textRef.current.innerHTML = '';

      words.forEach((word, index) => {
        const divWrapper = document.createElement('div');
        divWrapper.className = 'text-slide-up-animation-wrapper-1';
        divWrapper.style.display = 'inline';

        const divContent = document.createElement('div');
        divContent.className = 'text-slide-up-animation-content-1';

        const span = document.createElement('span');
        span.className = 'text-slide-up-animation-text-1';
        span.innerText = word;

        divContent.appendChild(span);
        divWrapper.appendChild(divContent);
        textRef.current.appendChild(divWrapper);

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

  return <div ref={textRef} className="text-slide-up-animation-1"></div>;
};

export default TextAnimation1;
