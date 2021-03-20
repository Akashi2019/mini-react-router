import React from 'react';

export default function ProductPage(props) {
  const { match } = props;
  const { url } = match;
  const { xx } = match.params;
  return (
    <div>
      商品: {xx},<a href={url}>商品地址</a>
    </div>
  );
}
