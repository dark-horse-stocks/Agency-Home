import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TextAnimation2 = ({ children, Tag = 'div', className = '' }) => {
  const textRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            gsap.fromTo(
              '.text-slide-up-animation-text-2',
              { rotateX: '-40deg', opacity: 0 },
              {
                translateY: '-130%',
                rotateX: '0deg',
                opacity: 1,
                duration: 1.5,
                ease: 'power4.out',
                stagger: 0.1,
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
        divWrapper.className = 'text-slide-up-animation-wrapper-2';
        divWrapper.style.display = 'inline-block';

        const divContent = document.createElement('div');
        divContent.className = 'text-slide-up-animation-content-2';
        divContent.style.display = 'inline-block';

        const span = document.createElement('span');
        span.className = 'text-slide-up-animation-text-2';
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

  return <Tag ref={textRef} className={`${className} text-slide-up-animation-2`}></Tag>;
};

export default TextAnimation2;
