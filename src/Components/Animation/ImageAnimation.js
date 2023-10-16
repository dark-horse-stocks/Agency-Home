import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageAnimation = ({ children, className = '' }) => {
  const imgRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            gsap.fromTo(
              imgRef.current,
              { skewY: '4deg' },
              {
                translateY: '-100%',
                skewY: '0deg',
                duration: 0.8,
                ease: 'power4.out',
              },
            );
            hasAnimated.current = true;
          }
        });
      },
      { threshold: 0.1 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div ref={imgRef} className={`${className} img-slide-up-animation-1`}>
      <span className="img-slide-up-animation-wrapper-1">
        <span className="img-slide-up-animation-content-1">
          <span className="img-slide-up-animation-img-1">{children}</span>
        </span>
      </span>
    </div>
  );
};

export default ImageAnimation;
