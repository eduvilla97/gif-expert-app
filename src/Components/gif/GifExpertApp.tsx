import { useState } from "react";
import { v4 as uuid } from "uuid";
import { AddCategory } from "./AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  return (
    <>
      {/* Titulo*/}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory setCategory={setCategories} />
      {/* Listado de gifs */}
      <ol>
        {categories.map((category) => {
          return <li key={uuid()}> {category} </li>;
        })}
      </ol>
      {/* gif item */}
    </>
  );
};
