import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <h6>Filter your directory by typing a name in the filter field.</h6>
        <h6>You can sort the directory by clicking on the column headers.
		</h6>
      </div>
    )
  }

export default Header;
