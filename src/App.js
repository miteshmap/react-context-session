import React, { useState } from "react";
import ContextProvider from "./context";
import AccountDetails from "./account-details";
import "./styles.css";

class App extends React.Component {
  state = { user: null, bg: null };

  changeBg = () => {
    this.setState({ bg: "red" });
  };

  loginUser = () => {
    // make api calls.
    // returns obje.
    const user = {
      name: "Mitesh patel",
      age: 30,
      job: "developer"
    };
    this.setState({ user });
  };

  render() {
    return (
      <ContextProvider user={this.state.user} bg={this.state.bg}>
        <button onClick={e => this.changeBg()}>Change bg</button>
        {!this.state.user && (
          <button onClick={() => this.loginUser()}>Login</button>
        )}
        {this.state.user && (
          <WelcomMessage>
            <h1>Hello {this.state.user.name}</h1>
            <AccountLink user={this.state.user} />
          </WelcomMessage>
        )}
      </ContextProvider>
    );
  }
}

const WelcomMessage = props => {
  return (
    <>
      <div className="welcome">{props.children}</div>
    </>
  );
};

const AccountLink = () => {
  const [currentPage, setPage] = useState(null);
  const showMyAccount = (e, page) => {
    e.preventDefault();
    setPage(page);
  };

  return currentPage ? (
    <AccountDetails />
  ) : (
    <ul>
      <ListElement>
        <button onClick={e => showMyAccount(e, "my-account")}>
          My Account
        </button>
      </ListElement>
      <ListElement>
        <a href="/my-account">Edit account</a>
      </ListElement>
      <ListElement>
        <a href="/my-account">My orders</a>
      </ListElement>
      <ListElement>
        <a href="/my-account">Logout</a>
      </ListElement>
    </ul>
  );
};

const ListElement = ({ children }) => {
  return <li>{children}</li>;
};

export default App;
