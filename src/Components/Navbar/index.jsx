import React from "react";

const Navbar = ({ students }) => {
    return (
        <div style={{ background: '#000', color: '#fff', padding: '10px', display: 'flex', justifyContent: 'space-around' }} >
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact</h1>
            <h1>Info {students.length}</h1>
        </div>
    )
}
export default Navbar;