import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import User from "./User";
import Search from "./Search";

function Main(props) {
  const [state, setState] = useState({
    query: "",
    users: props.users,
  });

  useEffect(() => {
    setState((state) => ({ ...state, users: props.users, query: "" }));
  }, [props.users]);

  const handleChange = (e) => {
    const results = props.users.filter((user) => {
      if (e === "") return props.users;
      return user.name.first.toLowerCase().includes(e.toLowerCase());
    });

    setState({
      query: e,
      users: results,
    });
  };

  return (
    <div className="container">
      <Search value={state.query} handleChange={handleChange} />
      {props.view === "grid" ? (
        <div className="cards">
          {state.users.map((user, index) => (
            <div className="card" key={index}>
              <UserCard key={index} user={user} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {state.users.map((user, index) => (
            <User key={index} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
