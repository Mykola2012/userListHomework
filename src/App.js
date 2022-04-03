import "./App.css";
import UsersList from "./components/UsersList";

import React, { Component } from "react";

const usersDB = [
  {
    id: 1,
    firstName: "Patrik",
    lastName: "Star",
    age: "Unknown",
    imgSrc: "",
    city: "Bikini Bottom",
  },
  {
    id: 2,
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: "35",
    imgSrc: "",
    city: "Bikini Bottom",
  },
  {
    id: 3,
    firstName: "Eugene",
    lastName: "Krabs",
    age: "73",
    imgSrc: "",
    city: "Bikini Bottom",
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersDB.map((u) => ({ ...u, isSelected: false })),
    };
  }

  setUsers = (newUsers) => {
    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;
    return <UsersList users={users} setUsers={this.setUsers} />;
  }
}

export default App;
