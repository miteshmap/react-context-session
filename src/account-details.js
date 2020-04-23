import React from "react";
import { userContext, themeContext } from "./context";

class AccountDetails extends React.Component {
  // static contextType = userContext;

  render() {
    // const { user } = this.context;
    return (
      <themeContext.Consumer>
        {({ bg }) =>
          console.log(bg) || (
            <userContext.Consumer>
              {({ user }) => (
                <ul style={{ backgroundColor: bg }}>
                  <li>Full name: {user.name}</li>
                  <li>age: {user.age}</li>
                  <li>job: {user.job}</li>
                </ul>
              )}
            </userContext.Consumer>
          )
        }
      </themeContext.Consumer>
    );
  }
}

export default AccountDetails;
