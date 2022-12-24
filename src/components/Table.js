import React from "react";
import TableRow from "./TableRow";
import "./table.css";

export const Table = (props) => {
  const { movies, deleteMovie } = props;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ردیف</th>
            <th>نام فیلم</th>
            <th>کارگردان</th>
            <th>ژانر فیلم</th>
            <th>سال ساخت</th>
            <th>توضیحات</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((mov) => {
            return <TableRow key={mov.id} {...mov} deleteMovie={deleteMovie} />;
          })}
        </tbody>
      </table>
    </>
  );
};
