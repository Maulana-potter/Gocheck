const Stats = ({ listItem }) => {
  return (
    <footer className="stats">
      <span>
        🥶 kamu punya {listItem.length} catatan baru dan baru{" "}
        {listItem.filter((item) => item.done).length} yang kamu selesaikan ({" "}
        {Math.round(
          (listItem.filter((item) => item.done).length / listItem.length) * 100
        )}
        % )
      </span>
    </footer>
  );
};

export default Stats;
