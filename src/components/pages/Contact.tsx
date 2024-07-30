// Contact.tsx
import React from "react";

const Contact: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfqCypUqwBjJFOmbbUSLEV-UBWlHX0I6tBQzV_1rdKS63HSVw/viewform?embedded=true"
        width="640"
        height="1100"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Contact;
