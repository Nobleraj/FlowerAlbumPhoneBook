/*
User should be able to add data and it will be desplayed
on the table below with Name in ascending order.
No duplicate data to be added.
Phone field should take only 10 digit numbers.
Table header should be hidden if no data is present.
Make the data persistent till the browser is open.
The component tree should not be modified.
No Props drill down. Use statemanagement.
*/
import React, { useState, useContext, createContext } from "react";
import Wrapper from "./Wrapper";
import { style } from "./style";

const UserList = createContext({
  userData: [],
  setUserData: () => {}
});

const PhoneBookForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const { userData, setUserData } = useContext(UserList);

  const addRecord = (e) => {
    e.preventDefault();
    if (!name.length || !phone.length) {
      alert("Enter the details");
      return;
    } else if (phone.length !== 10) {
      alert("Enter 10 digit phone number");
      return;
    }
    let addUser = { name: name, phone: phone };
    let tempUser = JSON.parse(localStorage.getItem("data"));
    let data = [...userData, addUser];
    if (Array.isArray(tempUser)) {
      data = [...data, ...tempUser];
    }
    setUserData(data);
    localStorage.setItem("data", JSON.stringify(data));
    setPhone("");
    setName("");
  };

  return (
    <form autocomplete="off" onSubmit={addRecord} style={style.form.container}>
      <label>Name:</label>
      <br />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={style.form.inputs}
        name="n"
        type="text"
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={style.form.inputs}
        name="p"
        type="number"
      />
      <br />
      <input style={style.form.submitBtn} type="submit" value="Add User" />
    </form>
  );
};

const InformationTable = () => {
  const { userData } = useContext(UserList);
  let tempUser = JSON.parse(localStorage.getItem("data"));
  let cacheData = userData;
  if (userData.length === 0 && Array.isArray(tempUser)) {
    cacheData = [...tempUser];
  }

  return (
    <table style={style.table}>
      <thead>
        {cacheData.length > 0 && (
          <tr>
            <th style={style.tableCell}>Name</th>
            <th style={style.tableCell}>Phone</th>
          </tr>
        )}
        {cacheData
          .sort((a, b) => {
            return a.name[0].toLowerCase() > b.name[0].toLowerCase() ? 1 : -1;
          })
          .map((user, i) => {
            return (
              <tr key={i}>
                <th style={style.tableCell}>{user.name}</th>
                <th style={style.tableCell}>{user.phone}</th>
              </tr>
            );
          })}
      </thead>
    </table>
  );
};

const Message = () => {
  const { userData } = useContext(UserList);
  let length_ = userData.length;
  let tempUser = JSON.parse(localStorage.getItem("data"));
  if (userData.length === 0 && Array.isArray(tempUser)) {
    length_ = tempUser.length;
  }
  return (
    <div style={style.msg}>
      <h4>Total Number of Contacts</h4>
      <h1>{length_}</h1>
    </div>
  );
};

const FormWrapper = () => (
  <Wrapper stack>
    <PhoneBookForm />
    <Message />
  </Wrapper>
);
const InfoWrapper = () => (
  <Wrapper>
    <InformationTable />
  </Wrapper>
);
export default () => {
  const [userData, setUserData] = useState([]);
  const value = { userData, setUserData };
  return (
    <UserList.Provider value={value}>
      <FormWrapper />
      <br />
      <InfoWrapper />
    </UserList.Provider>
  );
};
