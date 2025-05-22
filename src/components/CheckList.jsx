const CheckList = ({ listItem, toggleDone, deleteItem }) => {
  return (
    <div className="list">
      <ul>
        {listItem.map((item) => (
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
    </div>
  );
};

export default CheckList;
