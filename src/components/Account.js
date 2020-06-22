import React, { useContext, } from "react";
import { Card, } from "semantic-ui-react";
import { AccountContext, } from "../providers/AccountProvider";

const Account = () => {
  const { email, firstName, lastName, avatar } = useContext(AccountContext);

  return (
    <Card>
      <Card.Content>
        <Card.Header>{ email }</Card.Header>
        <Card.Meta>
          First Name: { firstName }
        </Card.Meta>
        <Card.Meta>
          Last Name: { lastName }
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Avatar: { avatar }</p>
      </Card.Content>
    </Card>
  );
};

export default Account;