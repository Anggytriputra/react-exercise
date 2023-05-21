import Axios from "axios";
import { useState } from "react";

const About = () => {
  const [userList, setUserList] = useState([]);

  const fetchData = () => {
    // then = waktu kita bali sudah mendaptkan data nya akan mendapar
    Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUserList(response.data);
      console.log("ini response bro", response);
    });
  };

  const renderList = () => {
    return userList.map((user, index) => {
      return (
        <div key={index}>
          <p>{user.name}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <p>About</p>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        Get Data
      </button>
      {renderList()}
    </div>
  );
};

export default About;
