import PropTypes from "prop-types";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" rel="noreferrer" target='_blank' href="https://reactjs.org/">{props.about}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/nishantsh20/">Creator</a>
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>
    )
}

// Specifying Type - For Case when another type sent -> It automatically TypeCast
Navbar.propTypes = {
    title: PropTypes.string.isRequired, // isRequired Ensures To it be present @any cost
    aboutText: PropTypes.string
}

// Default Props
Navbar.defaultProps = {
    title: "Application",
    about: "About",
}

export default Navbar;