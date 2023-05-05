import React from "react";

const TextWithHighlights = ({ text, searchWords, caseSensitive }) => {
  const highlightText = (text, searchWords, caseSensitive) => {
    let regexFlags = "gi"; // default to case-insensitive search
    if (caseSensitive) {
      regexFlags = "g"; // case-sensitive search
    }
    const regex = new RegExp(`(${searchWords})`, regexFlags);
    if (searchWords.length == 0) return text;
    console.log(text.split(regex));
    return text.split(regex).map((chunk, i) => {
      if (regex.test(chunk)) {
        return <mark key={i}>{chunk}</mark>;
      } else {
        return chunk;
      }
    });
  };

  return <div>{highlightText(text, searchWords, caseSensitive)}</div>;
};

export default TextWithHighlights;
