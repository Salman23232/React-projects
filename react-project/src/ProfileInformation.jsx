import React, { useState } from "react";

const ProfileInformation = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const [value, setValue] = useState({ name: "", age: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    setProfile(value);
  };

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          What is your
          <input
            type="text"
            value={value.name}
            placeholder="name"
            name="name"
            onChange={changeEventHandler}
          />
        </label>
        <br />
        <br />
        <label>
          What is your
          <input
            type="number"
            value={value.age}
            name="age"
            placeholder="age"
            onChange={changeEventHandler}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
      </div>
    </div>
  );
};

export default ProfileInformation;
