//query parameter use
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchParams({ name: name, age: age });
  };
  return (
    <>
      <h1>User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />

        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Age"
        />
        <button type="submit">Find User</button>
      </form>
      <h1>User Id {searchParams.get("id")}</h1>
      {/* //   Multiple parameter access */}
      <h2>User Name: {searchParams.get("name")}</h2>
      <h3>User age: {searchParams.get("age")}</h3>
    </>
  );
};

export default Users;
