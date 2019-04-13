import React from 'react'

const Navbar = props => {
    return (
        <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark ">
            <div className="form-group justify-content-center row col my-2 ml-5 mr-5 pl-5 pr-5">
                <input
                    onChange={() => {}}
                    className="form-control"
                    placeholder="Search"
                    type="search"/>
            </div>
        </nav>
    )
}

export default Navbar;