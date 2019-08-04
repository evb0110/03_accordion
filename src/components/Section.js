import React, { useState } from 'react';

export default function Section({ datum: { title, article } }) {
  const [boolVal, toggleVal] = useState(true);

  const toggleDisplay = () => {
    toggleVal(!boolVal);
    console.log(boolVal);
  };

  const display = boolVal => (boolVal ? 'none' : 'block');

  const displaySection = boolVal => `section${boolVal ? '' : ' open'}`;

  return (
    <section className={displaySection(boolVal)}>
      <button />
      <h3 className="sectionhead" onClick={toggleDisplay}>
        {title}
      </h3>
      <div className="articlewrap" style={{ display: display(boolVal) }}>
        <div className="article">{article}</div>
      </div>
    </section>
  );
}
