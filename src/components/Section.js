import React, { useState } from 'react';

export default function Section({ datum: { title, article } }) {
  const [display, setDisplay] = useState('none');
  const [button, setButton] = useState('block');

  const toggleDisplay = () => {
    setDisplay(display === 'none' ? 'block' : 'none');
    setButton(button === 'none' ? 'block' : 'none')
  }

  return (
    <section className="section open">
      <button style={{display: button}}>toggle</button>
      <h3 className="sectionhead" onClick={toggleDisplay}>{title}</h3>
      <div className="articlewrap" style={{display: display}}>
        <div className="article">{article}</div>
      </div>
    </section>
  );
}
