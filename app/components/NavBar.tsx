//'use client';
import Link from "next/link"
import "../styles/nav-bar.css";

function NavBar() {
	return( <div className="nav-bar">
		<Link className="page-link" href= {{pathname: "/"}}> Home </Link>
		<Link className="page-link" href= {{pathname: "/dashboard"}}> Other Page </Link>
	</div>
	);
}


export default NavBar;
