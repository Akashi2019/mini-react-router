import React, { Component } from 'react';
import { RouterContext } from './RouterContext';
import matchPath from './matchPath';

export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { location } = context;
          const { path, children, component, render } = this.props;
          const match = path
            ? matchPath(location.pathname, this.props)
            : context.match;
          const props = {
            ...context,
            match
          };
          return match
            ? children
              ? typeof children === 'function'
                ? children(props)
                : children
              : component
              ? React.createElement(component, props)
              : render
              ? render(props)
              : null
            : typeof children === 'function'
            ? children(props)
            : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
