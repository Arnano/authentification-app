import React, { Component } from 'react';
import { connect } from 'react-redux';

export const withAuth = ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      (!this.props.auth) this.props.history.push('/');
    }

    componentDidUpdate() {
      (!this.props.auth) this.props.history.push('/');
    }

    render() {
      return(
        <ChildComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth });
  return connect(mapStateToProps)(ComposedComponent);
}
