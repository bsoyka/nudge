<<<<<<< HEAD
//'use client';
import Link from "next/link"
import "../styles/nav-bar.css";

function NavBar() {
	return( <div className="nav-bar">
		<Link className="page-link" href= {{pathname: "/"}}> Home </Link>
		<Link className="page-link" href= {{pathname: "/page1"}}> Other Page </Link>
	</div>
	);
}


export default NavBar;

=======
'use client';
import Link from "next/link"

export default function() {
	
	return( <div>
		<Link href= {{pathname: "/"}}> Home </Link>
		<Link href= {{pathname: "/page1"}}> Other </Link>
	</div>
	);

}
>>>>>>> f408465b87fac6e6bc6277de98a6fdb6aef96926
