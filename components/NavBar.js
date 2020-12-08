import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavBar() {
    const router = useRouter()
    const isActive = (r) => {
        if (r === router.pathname) {
            return "active"
        } else {
            return ""
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link href="/">
                    <a className="navbar-brand" href="#">DEVAT</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/cart">
                                <a className={"nav-link" + isActive('/cart')} href="#"><i aria-hidden="true" className="fas fa-shopping-cart"></i>Cart</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/signin">
                                <a className={"nav-link" + isActive('/signin')} href="#"><i aria-hidden="true" className="fas fa-user"></i>User</a>
                            </Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user"></i>
                                User Name
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Profile</a>
                                <a className="dropdown-item" href="#">Logout</a> 
                            </div>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;