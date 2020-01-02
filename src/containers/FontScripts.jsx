import React from "react";
import { Helmet } from "react-helmet";

class FontScripts extends React.Component {
  render() {
    const fonts = this.props.items.map(item => item.family).join("|");

    return (
      <div className="application">
        <Helmet>
          <link
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css?family=${fonts}`}
          />
        </Helmet>
      </div>
    );
  }
}

export default FontScripts;
