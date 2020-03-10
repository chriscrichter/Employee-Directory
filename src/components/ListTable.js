import React, { useContext } from "react";
import ListBody from "./ListBody";
import "../styles/ListTable.css";
import ListAreaContext from "../utils/ListAreaContext";

const ListTable = () => {
  const context = useContext(ListAreaContext);

  return (

    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-hover table-condensed"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    context.handleSort(name);
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <ListBody />
      </table>
    </div>
  );
}

export default ListTable;
