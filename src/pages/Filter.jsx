import React, { useState } from "react";

const Filter = () => {
  const [fruits, setFruits] = useState(["Pisang", "Apel", "Jambu", "Anggur"]);
  const [searchString, setSearchString] = useState("");

  const renderList = () => {
    // cara 1

    let filterFruits = fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(searchString.toLowerCase());
    });
    return filterFruits.map((fruit) => {
      return (
        <div className="bg-black px-4 py-6 my-2 w-1/4 text-white m-auto">
          <p>{fruit}</p>
        </div>
      );
    });

    // cara 2

    // return fruits
    //   .filter((fruit) => {
    //     return fruit.toLowerCase().includes(searchString.toLowerCase());
    //   })
    //   .map((fruit) => {
    //     return (
    //       <div className="bg-black px-4 py-6 my-2 w-1/4 text-white m-auto">
    //         <p>{fruit}</p>
    //       </div>
    //     );
    //   });
  };

  const inputHandler = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div className="text-center mt-4">
      <input
        type="text"
        className="border-2 border-slate-700 w-1/4 h-10 px-2"
        onChange={inputHandler}
        value={searchString}
        placeholder="serach..."
      />
      {renderList()}
    </div>
  );
};

export default Filter;
