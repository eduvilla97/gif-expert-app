import { useState } from "react";
import { v4 as uuid } from "uuid";
import { AddCategory, GifGrid } from "./index";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory: string) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={uuid()} category={category} />
      ))}
    </>
  );
};
