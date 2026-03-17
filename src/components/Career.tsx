import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (Science)</h4>
                <h5>Tamluk High School</h5>
              </div>
              <h3>2021–2022</h3>
            </div>
            <p>
              Completed Higher Secondary in Science, building a strong foundation
              in problem-solving and structured learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Animation &amp; VFX</h4>
                <h5>Arena Animation Institute</h5>
              </div>
              <h3>2023–2025</h3>
            </div>
            <p>
              Focused on design fundamentals and motion graphics workflows while
              developing skills for digital and print design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancer in Graphic Designing</h4>
                <h5>Client Projects</h5>
              </div>
              <h3>2024–2026</h3>
            </div>
            <p>
              Created 100+ graphic designs for clients, completed complex design
              requests, and delivered on-brand assets for marketing and print.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
