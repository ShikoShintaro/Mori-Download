import "./App.css";

export default function App() {
  return (
    <div className="container">

      <div className="bubbles">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className="particles">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className="content">
        <h1>MORI AI</h1>

        <p className="desc">
          MORI AI is an intelligent conversational system designed for school assistance.
        </p>

        <br></br>

        <div className="features">
          <div>Answers school-related questions instantly</div>
          <div>Provides schedules, events, and announcements</div>
          <div>Reduces workload of administrative staff</div>
          <div>Fast and natural language responses</div>
          <div>Secure and controlled information system</div>
        </div>

        <a href="./public/Official-Mori-Release-V1.0.apk" download className="btn">
          Download APK
        </a>
      </div>

    </div>
  );
}