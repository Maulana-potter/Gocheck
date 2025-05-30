import { useState } from "react";

const CheckList = ({ listItem, toggleDone, deleteItem, onClearItems }) => {
  const [sortBy, setSortBy] = useState(["input"]);

  function sortItems() {
    switch (sortBy) {
      case "title":
        return listItem.slice().sort((a, b) => a.title.localeCompare(b.title));
      case "status":
        return listItem.slice().sort((a, b) => Number(a.done) - Number(b.done));
      case "input":
      default:
        return listItem;
    }
  }

  const sortedItems = sortItems();
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleDone(item.id)}
            />
            <span
              style={{ textDecoration: item.done ? "line-through" : "none" }}
            >
              {item.title}
            </span>
            <button onClick={() => deleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">urutan berdasarkan input </option>
          <option value="title">urutan berdasarkan judul </option>
          <option value="status">urutan berdasarkan status </option>
        </select>
        <button onClick={onClearItems}>Hapus</button>
      </div>
    </div>
  );
};

export default CheckList;
