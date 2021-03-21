import React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from '../react-router-dom/hooks';

export default function ProductPage(props) {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const params = useParams();
  console.log('props: ', history, location, match, params);
  // const { match } = props;
  const { url } = match;
  const { xx } = match.params;
  return (
    <div>
      商品: {xx},<a href={url}>商品地址</a>
    </div>
  );
}
