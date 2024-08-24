import React from "react";

export default Footer;

const time = new Date();
let year = time.getFullYear();

function Footer() {
    return (
        <footer>
            <p>Copyright {year}</p>
        </footer>
    );
}