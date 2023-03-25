import React, { useState } from "react";
import "../Todo-App/Todo.scss";
import Image from '../Todo-App/images/delete-btn.png'

const Todo = () => {
  const [menu, setMenu] = useState("crud");

  const showCrud = () => {
    menu === "crud" ? setMenu("crud crudActive") : setMenu("crud");
  };

  //localStoragedan ma'lumot olish
  const [todo, setTodo] = useState(() => {
    const getStorage = localStorage.getItem("todos");
    return getStorage ? JSON.parse(getStorage) : [];
  });
//////////////////////////
const [id, setId] = useState('')
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [userName, setUserName] = useState("");
const [age, setAge] = useState("");
const [salary, setSalary] = useState("");

const getInputId = (e) => {
    setId(e.target.value);
  };
  const getInputfName = (e) => {
    setFirstName(e.target.value);
  };
  const getInputlName = (e) => {
    setLastName(e.target.value);
  };
  const getInputuName = (e) => {
    setUserName(e.target.value);
  };
  const getInputAge = (e) => {
    setAge(e.target.value);
  };
  const getInputSalary = (e) => {
    setSalary(e.target.value);
  };

  const inputValueSubmit = (e) => {
    e.preventDefault();

    if (!firstName.trim()) return;
    else
      setTodo([...todo,{
          id: id,
          fName: firstName,
          lName: lastName,
          uName: userName,
          age: age,
          salary: salary,
        },
      ]);
    setId("");
    setFirstName("");
    setLastName("");
    setUserName("");
    setAge("");
    setSalary("");
  };

  localStorage.setItem("todos", JSON.stringify(todo));

  const userDelete = (id) => {
    const deleteItem = todo.filter((item) => item.id !== id);
    setTodo(deleteItem);
  }

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar__elements">
            <div className="burger" onClick={showCrud}>
              <hr className="burger_line" />
              <hr className="burger_line" />
              <hr className="burger_line" />
            </div>
            <h1 className="navbar_title">React User Application</h1>
            <a href="#" className="navbar_link">
              Login
            </a>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className={menu}>
          <h2 className="todo_title">User Details</h2>

          <form action="#" className="form" onSubmit={inputValueSubmit}>
            <input type="text" placeholder="id" value={id} onChange={getInputId} />
            <input type="text" placeholder="First name" value={firstName} onChange={getInputfName} />
            <input type="text" placeholder="Last name" value={lastName} onChange={getInputlName} />
            <input type="text" placeholder="Username" value={userName} onChange={getInputuName} />
            <input type="text" placeholder="Age" value={age} onChange={getInputAge} />
            <input type="text" placeholder="Salary" value={salary} onChange={getInputSalary} />

            <button type="submit" className="submit_btn">Add</button>
          </form>
        
        </div>

        <table>
            <thead>
                <tr className="table_row">
                    <th>ID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Username</th>
                    <th>Age</th>
                    <th>Salary</th>
                </tr>
            </thead>

            <tbody>
                {
                    todo.map((element) => (
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td> {element.fName}</td>
                            <td> {element.lName}</td>
                            <td> {element.uName}</td>
                            <td> {element.age}</td>
                            <td> {element.salary}</td>
                            <td>  
                                <button className="delete_btn" onClick={() => userDelete(element.id)}>
                                <img className="delete-btn-img" src={Image} alt="delete-icon"></img>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
          </table>
       
      </div>
    </div>
  );
};

export default Todo;
