import React from "react";
import PDF from "../Assets/PDF/regulamin.pdf";

class RulesView extends React.Component {
  render() {
    return (
      <iframe
        src={PDF + "#toolbar=0"}
        height="100vh"
        width="100%"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          height: "100vh",
        }}
        title="pdf"
      />
    );
  }
}

export default RulesView;
