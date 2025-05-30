import CheckList from "./components/CheckList";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Stats from "./components/Stats";
import { useState } from "react";

const App = () => {
  const Item = [
    { id: 1, title: "makan", done: false },
    { id: 2, title: "tidur", done: false },
    { id: 3, title: "mandi", done: false },
    { id: 4, title: "bermain", done: false },
    { id: 5, title: "belajar", done: false },
  ];

  const [listItem, setListItem] = useState(Item);
  const addItem = (title) => {
    const newItem = {
      id: Date.now(),
      title,
      done: false,
    };
    setListItem([...listItem, newItem]);
  };

  const toggleDone = (id) => {
    const updated = listItem.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setListItem(updated);
  };

  const deleteItem = (id) => {
    setListItem(listItem.filter((item) => item.id !== id));
  };

  function handleClearItems() {
    const confirm = window.confirm("are you sure want to clear the list?");
    if (confirm) {
      setListItem([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <CheckList
        listItem={listItem}
        toggleDone={toggleDone}
        deleteItem={deleteItem}
        onClearItems={handleClearItems}
      />

      <Stats listItem={listItem} />
    </div>
  );
};

export default App;
