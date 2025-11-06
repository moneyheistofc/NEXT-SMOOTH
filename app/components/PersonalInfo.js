export default function PersonalInfo() {
  return (
    <section className="personal-info">
      <h2 className="info-title">Personal Information</h2>
      <div className="info-grid">
        <div className="info-item">
          <i className="fas fa-user"></i>
          <div>
            <strong>Name:</strong> H.M.Nipun Dhanujaya
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-birthday-cake"></i>
          <div>
            <strong>Age:</strong> 18
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <strong>From:</strong> Sri Lanka
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-phone"></i>
          <div>
            <strong>Contact:</strong> 
            <a href="https://wa.me/+94757255903" target="_blank">
              +94757255903
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
