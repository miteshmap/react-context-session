import React from "react";

export const userContext = React.createContext();
export const themeContext = React.createContext();

class ContextProvider extends React.Component {
  render() {
    return (
      <themeContext.Provider value={{ bg: this.props.bg }}>
        <userContext.Provider value={{ user: this.props.user }}>
          {this.props.children}
        </userContext.Provider>
      </themeContext.Provider>
    );
  }
}

export default ContextProvider;
