import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
	return (
		<div className="SignedLinks">
			<ul className="right">
				<li>
					<NavLink to="/signup">Signup</NavLink>
				</li>
                <li>
					<NavLink to="/signin">Login</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SignedOutLinks;
