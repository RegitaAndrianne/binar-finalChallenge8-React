import "./Table.css";

const Table = (props) => {
  // const contohFungsi = () => {
  //     console.log("contoh fungsi di button Edit")
  // }

  return (
    <table className="table">
      <thead>
        <tr>
          <td>No</td>
          <td>Username</td>
          <td>Email</td>
          <td>Experinece</td>
          <td>Level</td>
          <td>Action</td>
        </tr>
      </thead>

      <tbody>
        {props.players?.map((player, key) => {
          return (
            <tr key={key}>
              <td>{player.id}</td>
              <td>{player.username}</td>
              <td>{player.email}</td>
              <td>{player.experience}</td>
              <td>{player.level}</td>
              <td>
                {/* <button onClick={props.onEditPlayer(player)}>Edit</button> */}
                {/* <button onClick={contohFungsi}>Edit</button> */}
                <button onClick={() => props.onEditPlayer(player)}>Edit</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
