import React from 'react';
import accomplishmentsData from '../Assets/Accomplishments.json';
import '../Styles/Accomplishments.css';

const Accomplishments = () => {
  const achievements = accomplishmentsData.achievements_certifications || [];
  const leadership = accomplishmentsData.leadership_activities || [];

  return (
    <div className="accomplishments-container" id="accomplishments">
      <h3 className="accomplishments-title">ACCOMPLISHMENTS & CERTIFICATIONS</h3>
      <div className="timeline">
        <div className="central-line"></div>

        {achievements.length > 0 ? (
          achievements.map((achievement, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="horizontal-line"></div>
              <div className="timeline-content">
                <h3>{achievement.name}</h3>
                <p>{achievement.description}</p>
                <div className="skills">Skills: {achievement.skills}</div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">No accomplishments available.</p>
        )}
      </div>
      <hr/>
      <h3 className="accomplishments-title">LEADERSHIP & ACTIVITIES</h3>
      <div className="timeline">
        <div className="central-line"></div>

        {leadership.length > 0 ? (
          leadership.map((activity, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="horizontal-line"></div>
              <div className="timeline-content">
                <h3>{activity.name}</h3>
                <p>{activity.description}</p>
                <div className="skills">{activity.skills}</div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">No leadership activities available.</p>
        )}
      </div>
      <hr/>
    </div>
  );
};

export default Accomplishments;
