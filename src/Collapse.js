import React, { useRef, useState } from 'react';

const Collapse = () => {
  const [hidden, setHidden] = useState(true);
  const bio = useRef(null);

  function collapseContent() {
    bio.current.hidden = !bio.current.hidden;
    setHidden(bio.current.hidden);
  }
  return (
    <>
      <button onClick={collapseContent}>Click me!</button>
      <div
        ref={bio}
        hidden={hidden}
        style={{ background: 'black', color: 'white', padding: '16px' }}
      >
        Hi there my name is Johnny and I am a human.
      </div>
      <div style={{ background: 'black', color: 'white', padding: '16px' }}>
        Hi there my name is Johnny and I am not a human.
      </div>
    </>
  );
};

export default Collapse;
