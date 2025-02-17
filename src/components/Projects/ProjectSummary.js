import React from 'react';
import moment from 'moment';

export default function ProjectSummary({ project }) {
	return (
		<div className="card z-depth-0 project-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">
					<p>{project.title}</p>
					<p>
						Posted by {project.authorFirstName} {project.authorLastName}
					</p>
					<p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
				</span>
			</div>
		</div>
	);
}
