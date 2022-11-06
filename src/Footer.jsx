import React from "react";

const curryear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copywrite @{curryear}</p>
    </footer>
  );
}

export default Footer;
