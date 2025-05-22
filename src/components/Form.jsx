import { useState } from "react";
const Form = ({ addItem }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(title);
    setTitle("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>ada yang mau dicatat engga ?😏</h3>
      <input
        type="text"
        placeholder="tulis disini"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
