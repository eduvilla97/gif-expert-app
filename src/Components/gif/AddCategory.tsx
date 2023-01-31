import { useState } from "react";

type AddCategoryProps = {
  onNewCategory: (category: string) => void;
};

export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputClean = inputValue.trim();
    if (inputClean.length < 1) return;
    onNewCategory(inputClean);
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
