import React from 'react';

import Section from './Section';
import uuid from 'uuid/v1';

export default function Sections({ data }) {
  return data.map(datum => <Section datum={datum} key={uuid()} />);
}
