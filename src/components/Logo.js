import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Images imported from the IMG tag are accessible in "public" */}
      <img src="./logo192.png" alt="logo react" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
