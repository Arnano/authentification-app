import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux"; // apply multiple HOC to a single component

import { signin } from "../../actions";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(formProps) {
    this.props.signin(formProps, () => {
      this.props.history.push("/feature");
    });
  }

  render() {
    const { handleSubmit } = this.props; //Redux form

    return (
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        <fieldset>
          <label> Email </label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label> Password </label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button> Signin </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({ errorMessage: state.auth.errorMessage });

export default compose(
  connect(mapStateToProps, { signin }),
  reduxForm({ form: "signin" })
)(Signin);
