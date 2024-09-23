import React, { useState ,useEffect} from "react";
import './profile.css'; 
const Profile = () => {
    const [userProfile, setUserProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        experience: '2+ years in Frontend Development',
        skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Redux'],
        appliedJobs: [
            { id: 1, title: 'Frontend Developer', company: 'Tech Corp', status: 'Applied' },
            { id: 2, title: 'React.js Engineer', company: 'Web Solutions', status: 'Interview' },
        ],
        savedJobs: [
            { id: 1, title: 'Fullstack Developer', company: 'Creative Agency' },
        ],
    });

    // Example useEffect to fetch user data from API (if connected to a backend)
    useEffect(() => {
        // Fetch user profile data from backend (if applicable)
        // fetchUserProfile().then(data => setUserProfile(data));
    }, []);


    return (

        <div className="profile-container">
            <div className="profile-header">
                <h1>{userProfile.name}</h1>
                <p>{userProfile.email}</p>
                <p><strong>Experience:</strong> {userProfile.experience}</p>
                <p><strong>Skills:</strong> {userProfile.skills.join(', ')}</p>
            </div>

            <div className="profile-section">
                <h2>Applied Jobs</h2>
                <ul>
                    {userProfile.appliedJobs.map((job) => (
                        <li key={job.id}>
                            <strong>{job.title}</strong> at {job.company} - Status: {job.status}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="profile-section">
                <h2>Saved Jobs</h2>
                <ul>
                    {userProfile.savedJobs.map((job) => (
                        <li key={job.id}>
                            <strong>{job.title}</strong> at {job.company}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Profile

