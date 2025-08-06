import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({
  badgeText,
  photo,
  flag,
  name,
  role,
  company,
  companyLogo,
  skills,
  match,
  onIntroRequest,
  onPrivateMeeting,
  onChat
}) => {
  const medalIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.095 11.261" width="1.5em" height="1.5em">
      <g transform="translate(-71.962)">
        <path
          d="M80.057,3.227l-.7-.688-.1-.976-.929-.317L77.811.41l-.974.118L76.01,0l-.827.528L74.208.41l-.515.836-.929.317-.1.976-.7.688.332.924-.332.924.7.688.1.976.929.317.515.836.974-.118.827.528.827-.528.974.118.515-.836.929-.317.1-.976.7-.688-.332-.924Z"
          fill="#ebe42f"
        />
        <g fill="#c18e2e">
          <path d="M82.229,343.6l-.612-.993-.208-.071-.9,2.806,1.616-.089,1.264,1.01.744-2.325-.748-.477Z" transform="translate(-8.361 -335.001)" />
          <path d="M269.22,342.606l-.612.993-1.159-.14-.748.477.744,2.325,1.264-1.01,1.616.089-.9-2.806Z" transform="translate(-190.456 -335.001)" />
        </g>
      </g>
    </svg>
  );

  const starIcon = (
    <svg viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em">
  <path
    d="m11.3945 1.78627c.1496-.46083.8016-.46084.9512.00001l1.9822 6.1068c.2007.61825.7767 1.03689 1.4267 1.03689h6.4168c.4843 0 .6857.61956.2941.90437l-5.193 3.77666c-.5252.382-.745 1.0586-.5445 1.6763l1.9832 6.1096c.1495.4607-.3779.8436-.7697.5587l-5.1891-3.7739c-.526-.3825-1.2386-.3825-1.7645 0l-5.18923 3.7739c-.39176.2849-.91921-.098-.76966-.5587l1.98315-6.1096c.2005-.6177-.01926-1.2943-.54447-1.6763l-5.19301-3.77666c-.391622-.28481-.19016-.90437.29409-.90437h6.41679c.65 0 1.22604-.41864 1.42672-1.03689z"
    fill="transparent"
    stroke="#c2b281"
  />
</svg>
  );

  const chatIcon = (
    <svg viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em">
  <path
    d="m8.62406 14.8538c4.76244 0 8.62234-3.3242 8.62234-7.42689 0-4.10265-3.8599-7.42691-8.62234-7.42691-4.76248 0-8.62231015 3.32426-8.62231015 7.42691 0 1.61036.59615215 3.09929 1.60658015 4.31689-.06399.8748-.38396 1.6532-.720772 2.2459-.185245.3285-.373858.5928-.51195.7713-.07073.0893-.124619.1571-.165037.2035-.020208.0214-.03368.0393-.043785.05l-.010104.0107c-.15493215.1643-.1987173.4071-.1145151.6213.0842021.2142.2795521.3535.4984771.3535.966646 0 1.940016-.3178 2.748366-.6891.77129-.3571 1.42807-.782 1.82887-1.0926 1.07105.4106 2.25662.6391 3.50618.6391zm-4.31115-8.56949c.28584 0 .55998.12038.76211.33466.20212.21428.31568.50491.31568.80794 0 .30304-.11356.59367-.31568.80794-.20213.21428-.47627.33467-.76211.33467-.28585 0-.55999-.12039-.76212-.33467-.20212-.21427-.31567-.5049-.31567-.80794 0-.30303.11355-.59366.31567-.80794.20213-.21428.47627-.33466.76212-.33466zm4.31115 0c.28585 0 .55999.12038.76212.33466.20212.21428.31567.50491.31567.80794 0 .30304-.11355.59367-.31567.80794-.20213.21428-.47627.33467-.76212.33467-.28584 0-.55998-.12039-.76211-.33467-.20212-.21427-.31568-.5049-.31568-.80794 0-.30303.11356-.59366.31568-.80794.20213-.21428.47627-.33466.76211-.33466zm3.23334 1.1426c0-.30303.1136-.59366.3157-.80794s.4763-.33466.7621-.33466c.2859 0 .56.12038.7621.33466.2022.21428.3157.50491.3157.80794 0 .30304-.1135.59367-.3157.80794-.2021.21428-.4762.33467-.7621.33467-.2858 0-.56-.12039-.7621-.33467-.2021-.21427-.3157-.5049-.3157-.80794z"
    fill="white"
  />
</svg>
  );

  return (
    <div className="profile-card">
        {/* Badge */}
        <div className="badge">
            <span className="badge-icon">{medalIcon}</span>
            <span>{badgeText}</span>
        </div>

        {/* Header */}
        <div className="profile-header">
            <div className="photo-container">
                <img src={photo} alt={name} className="profile-photo" />
                <img src={flag} alt="flag" className="flag-overlay" />
            </div>
             <div className="profile-container">
            <div className="profile-section">        
                <div className="profile-info">
                    <h2>{name}</h2>
                    <p>{role}</p>
                    <p className="company">{company}</p>
                </div>
                <img src={companyLogo} alt="Company Logo" className="company-logo" />
            </div>        

            {/* Skills */}
            <div className="skills-section">
                <div className="skills">{skills}</div>
                <span className="star">{starIcon}</span>
            </div>
        </div> 
        </div>
         
        {/* Match */}
        <div className="match-section">
            <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${match}%` }}></div>
            </div>
            <span className="match-text">{match}% Match</span>
            
        </div>

        {/* Buttons */}
        <div className="actions">
            <button className="btn-outline" onClick={onIntroRequest}>Intro request</button>
            <button className="btn-outline" onClick={onPrivateMeeting}>Private Meeting</button>
            <button className="btn-solid" onClick={onChat}>
            {chatIcon} Chat
            </button>
        </div>
    </div>
  );
};

export default ProfileCard;
