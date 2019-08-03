import React from 'react';

import Section from './Section';

export default function Sections({ data }) {
  return data.map(datum => <Section datum={ datum } />);
}
