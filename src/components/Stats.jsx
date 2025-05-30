const Stats = ({ listItem }) => {
  if (listItem.length === 0) {
    return (
      <footer className="stats">
        <span>buat tugas kamu</span>
      </footer>
    );
  }

  const totalItems = listItem.length;
  const doneItems = listItem.filter((item) => item.done).length;
  const persentece = Math.round(
    (listItem.filter((item) => item.done).length / listItem.length) * 100
  );

  return (
    <footer className="stats">
      <span>
        {persentece === 100
          ? "kamu sudah menyelesaikan tugas kamu "
          : ` kamu punya ${totalItems} catatan baru dan baru ${doneItems} yang kamu
        selesaikan ( ${persentece}% )`}
      </span>
    </footer>
  );
};

export default Stats;
