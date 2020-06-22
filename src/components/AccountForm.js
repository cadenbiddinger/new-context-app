import React from "react";
import { Form, } from "semantic-ui-react";

class AccountForm extends React.Component {
  state = { email: "", firstName: "", lastName: "" };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { email, firstName, lastName } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New User"
          type="text"
          email="Email"
          firstName= "first"
          lastName="last"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Select
          label="Avatar"
          name="Avatar"
          value={avatar}
          onChange={this.handleChange}
          options={avatarOptions}
        />
        <Form.Button color="black">Save</Form.Button>
      </Form>
    )
  }
}

const membershipOptions = [
  { key: "l", text: "Lion", value: "Lion", },
  { key: "w", text: "Wolf", value: "Wolf", },
  { key: "b", text: "Bear", value: "Bear", },
  { key: "l", text: "Leopard", value: "Leopard", },
];

const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      { value => (
        <AccountForm 
          { ...props }
          username={value.username}
          avatar={value.avatar}
          updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>
  )
}

export default AccountForm;