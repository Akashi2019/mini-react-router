import React, { Component } from 'react';

export default class UserPage extends Component {
  render() {
    const { match } = this.props;
    console.log('match: ', match);
    return <div>用户</div>;
  }
}
