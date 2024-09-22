"use client"

import React from 'react';
import Typed from 'typed.js';

function TypeWriter( { text="Example Text",  speed = 50}:any) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: text,
      typeSpeed: speed,
      backSpeed: 50,
      backDelay: 600,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span className='text-3xl drop-shadow-2xl' ref={el} />
    </div>
  );
}

export default TypeWriter