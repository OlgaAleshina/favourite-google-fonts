import React, { useState } from "react";

function FilterableFontTable1() {
  const [cardText, setCardText] = useState("my sentence");
  const [fontSizesOptions, setFontSizesOptions] = useState([12, 14, 20, 24]);
  const [fontList, setFontList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
