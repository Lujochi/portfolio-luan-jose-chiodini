import "./Home.css";

export const Home = () => {
  return (
    <section id="Home">
      <img src="/images/avatar.png" alt="Avatar" />
      <div className="container">
        <h1>I'm Luan Jose Chiodini</h1>
        <h2>Full Stack Developer</h2>
        <p>
          My name is Luan, I'm 20 years old, and I'm a Full-Stack developer. I'm
          studying Computer Science. I have knowledge of the following
          languages, frameworks, and technologies: HTML and CSS, JavaScript,
          Typescript, React, Node, MySQL, and Jest. I'm a good teammate and very
          dedicated to what I do.
        </p>
        <div className="btns">
          <ul>
            <li>
              <a href="#Contact" className="GetContact-button">
                Get In Touch
              </a>
            </li>
            <li>
              <a
                href="/LuanJose_Chiodini_currículo.pdf"
                download
                className="download-button"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
