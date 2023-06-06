import "./about.css";

export default function About() {
  return (
    <section className="about-container">
      <div className="about-text">
        <p>
          Passionate and driven frontend developer with a knack for solving
          complex problems through creative solutions. Dedicated to designing
          efficient and visually stunning web applications that deliver
          exceptional user experiences. Thrives in dynamic environments,
          constantly seeking new opportunities to learn and push the boundaries
          of frontend development.
        </p>
      </div>
      <div className="about-portrait">
        <img className="img-portrait" src="/src/assets/portrait.webp" alt='portrait'/>
      </div>
    </section>
  );
}
