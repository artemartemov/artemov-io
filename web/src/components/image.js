import * as React from 'react';

function resolveImage(src) {
  return require(`../images/${src}`);
}

export default function Image({ src, props }) {
  return <img src={resolveImage(src)} {...props} />;
}
