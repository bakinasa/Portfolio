import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="container" id="half-div">
                <nav>
                    <Link to="/about">About me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/comic">Comics</Link>
                </nav>
                <img src="/Myphoto.png" alt="My photo"/>
            </div>
        </header>
    );
}
