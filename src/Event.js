import React from "react";

function Event({ event }) {
  const id = event.id;

  return (
    <tr>
      <th>{id}</th>
      <th>{event.title}</th>
      <th>{event.body}</th>
      <th>
        <button className="btn btn-danger">削除</button>
      </th>
    </tr>
  );
}

export default Event;
