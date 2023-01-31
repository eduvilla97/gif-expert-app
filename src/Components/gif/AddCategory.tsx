import { useState } from "react";

type AddCategoryProps = {
  setCategory: React.Dispatch<React.SetStateAction<string[]>>;
};

export const AddCategory = ({ setCategory }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length < 1) return;
    setCategory((categories) => [...categories, inputValue]);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </form>
  );
};
