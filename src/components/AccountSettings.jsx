

const AccountSettings = () => {
  return (
    <div className="account-settings-container">
      <h3 className="account-title">Account Settings</h3>
      <div className="account-card">
        <div className="profile-section">
          <img
            src="/Ellipse 114/Ellipse 114.png" 
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-info">
            <h4 className="profile-name">Marry Doe</h4>
            <p className="profile-email">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
