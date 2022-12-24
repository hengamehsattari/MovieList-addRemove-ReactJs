import React, { useState } from "react";
import { Modal } from "./Modal";
import "./table.css";

function TableRow({
  id,
  title,
  director,
  genre,
  year,
  explanation,
  deleteMovie,
}) {
  const [showModal, setshowModal] = useState(false);
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{director}</td>
      <td>{genre}</td>
      <td>{year}</td>
      <td>
        <button className="explain" onClick={() => setshowModal(true)}>
          توضیحات
        </button>
        {showModal && (
          <Modal
            explanation={explanation}
            closeModal={() => setshowModal(false)}
          />
        )}
      </td>
      <td>
        <button className="delete" onClick={(e) => deleteMovie(e, id)}>
          حذف
        </button>
      </td>
    </tr>
  );
}
//
export default TableRow;
