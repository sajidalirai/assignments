import React, { useState } from "react";
import TextWithHighlights from "./TextWithHighlights";

const MyComponent = () => {
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCaseChange = (event) => {
    setCaseSensitive(event.target.checked);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea type="text" value={text} onChange={handleTextChange} />
      <br />
      <input type="text" value={searchText} onChange={handleSearchChange} />
      <br />
      <label>
        Case sensitive:
        <input
          type="checkbox"
          checked={caseSensitive}
          onChange={handleCaseChange}
        />
      </label>
      <TextWithHighlights
        text={text}
        searchWords={searchText}
        caseSensitive={caseSensitive}
      />
    </div>
  );
};

export default MyComponent;
