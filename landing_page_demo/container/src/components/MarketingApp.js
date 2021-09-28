import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/App';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, {
      onNavigate: () => {
        console.log('should be navigated.');
      },
    });
  }, []);

  return <div ref={ref} />;
};
