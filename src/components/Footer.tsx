import React from "react";

const Footer = () => {
  const d = new Date();
  return (
    <footer className="border-t py-3">
      <div className="container">
        <div className="flex justify-center">
          <p>copyright &copy; {d.getFullYear()} - daffadmr</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
