import './App.css'

function App() {
  const organizers = [
    {
      name: "Xiuqi Tommy Zhu",
      institute: "Northeastern University",
      website: "https://janesmith.tech",
      photo: "/placeholder-avatar.svg"
    },
    {
      name: "Xiaoan Liu",
      institute: "University of Colorado, Boulder",
      website: "https://mchen.research.edu",
      photo: "/placeholder-avatar.svg"
    },
    {
      name: "Xianhao Carton Liu",
      institute: "University of Minnesota, Twin Cities",
      website: "https://carton22.github.io",
      photo: "/placeholder-avatar.svg"
    },
    {
      name: "Chenyang Zhang",
      institute: "Georgia Institute of Technology",
      website: "https://alexrodriguez.hci.edu",
      photo: "/placeholder-avatar.svg"
    }
  ];

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: "2rem" }}>
      <h1>CHI 2026 Smart Glass Meet-up</h1>
      <p>Welcome to the official meet-up website! Let's make some noise!</p>
      <p>📅 Coming in 2026</p>
      <p>📍 Location: ACM CHI 2026 Conference</p>
      
      <section style={{ marginTop: "3rem" }}>
        <h2>Organizers</h2>
        <div 
          className="organizers-grid"
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(4, 1fr)", 
            gap: "1.5rem", 
            marginTop: "2rem",
            maxWidth: "1200px",
            margin: "2rem auto"
          }}
        >
          {organizers.map((organizer, index) => (
            <div key={index} className="organizer-card" style={{
              backgroundColor: "#f8f9fa",
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}>
              <img 
                src={organizer.photo} 
                alt={`${organizer.name} photo`}
                className="organizer-photo"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "1rem",
                  border: "3px solid #e9ecef"
                }}
              />
              <h3 style={{ margin: "0.5rem 0", color: "#2c3e50" }}>
                {organizer.name}
              </h3>
              <p style={{ 
                margin: "0.5rem 0", 
                color: "#6c757d",
                fontSize: "0.9rem"
              }}>
                {organizer.institute}
              </p>
              <a 
                href={organizer.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="organizer-website"
                style={{
                  color: "#007bff",
                  textDecoration: "none",
                  fontSize: "0.9rem"
                }}
              >
                Personal Website →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2>Schedule</h2>
        <div style={{
          backgroundColor: "#f8f9fa",
          padding: "2rem",
          borderRadius: "10px",
          maxWidth: "800px",
          margin: "2rem auto",
          textAlign: "left"
        }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ color: "#2c3e50", marginBottom: "0.5rem" }}>📅 Day 1 - Sessions</h3>
            <div style={{ marginLeft: "1rem" }}>
              <p><strong>9:00 AM - 9:30 AM</strong> Welcome & Introductions</p>
              <p><strong>9:30 AM - 10:30 AM</strong> Keynote: Future of Smart Glass Technology</p>
              <p><strong>10:30 AM - 11:00 AM</strong> Coffee Break</p>
              <p><strong>11:00 AM - 12:30 PM</strong> Paper Presentations Session 1</p>
              <p><strong>12:30 PM - 2:00 PM</strong> Lunch Break</p>
              <p><strong>2:00 PM - 3:30 PM</strong> Paper Presentations Session 2</p>
              <p><strong>3:30 PM - 4:00 PM</strong> Coffee Break</p>
              <p><strong>4:00 PM - 5:30 PM</strong> Interactive Demo Session</p>
              <p><strong>5:30 PM - 6:00 PM</strong> Panel Discussion & Q&A</p>
            </div>
          </div>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ color: "#2c3e50", marginBottom: "0.5rem" }}>📅 Day 2 - Hands-on Activities</h3>
            <div style={{ marginLeft: "1rem" }}>
              <p><strong>9:00 AM - 10:30 AM</strong> Smart Glass Prototyping Workshop</p>
              <p><strong>10:30 AM - 11:00 AM</strong> Coffee Break</p>
              <p><strong>11:00 AM - 12:30 PM</strong> User Experience Design Session</p>
              <p><strong>12:30 PM - 2:00 PM</strong> Lunch Break</p>
              <p><strong>2:00 PM - 4:00 PM</strong> Group Project Development</p>
              <p><strong>4:00 PM - 4:30 PM</strong> Coffee Break</p>
              <p><strong>4:30 PM - 5:30 PM</strong> Project Presentations</p>
              <p><strong>5:30 PM - 6:00 PM</strong> Closing Remarks & Networking</p>
            </div>
          </div>

          <div style={{ 
            backgroundColor: "#e3f2fd", 
            padding: "1rem", 
            borderRadius: "5px",
            borderLeft: "4px solid #2196f3"
          }}>
            <p style={{ margin: "0", fontWeight: "bold", color: "#1976d2" }}>
              📍 Location: TBD - ACM CHI 2026 Conference Venue
            </p>
            <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", color: "#1976d2" }}>
              Detailed room assignments will be announced closer to the conference date.
            </p>
          </div>
        </div>
      </section>

    

      <footer style={{ marginTop: "3rem", fontSize: "0.8rem", color: "gray" }}>
        © 2026 Smart Glass Workshop
      </footer>
    </div>
  );
}

export default App;