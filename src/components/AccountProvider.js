import React from "react";


const AccountContext = React.createContext();


export const AccountConsumer = AccountContext.Consumer;


class AccountProvider extends React.Component {
  state = {
    email: "Fooman77@gmail.com",
    firstName: "Foo",
    lastName: "man"
    avatar: "Lion",
    updateAccount: (account) => this.updateAccount(account),
  };
    
  render() {
    return (
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export const AccountContext = React.createContext();
