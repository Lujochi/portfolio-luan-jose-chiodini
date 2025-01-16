import "./Experience.css";

export const Experience = () => {
  return (
    <section id="Experience">
      <h3>Experience</h3>
      <ul>
        <li>
          <div className="container-text">
            <div className="logo-title">
              <img src="/images/uniasselvi-logo.png" alt="Logo Uniasselvi" />
              <h5>Ciência da Computação</h5>
            </div>
            <p>Feb 2025 - Present</p>
          </div>
          <p>
            Graduado em Ciência da Computação pela Uniasselvi, com expertise em
            desenvolvimento de software, inteligência artificial, segurança da
            informação e análise de sistemas. Experiência em programação, banco
            de dados e tecnologias emergentes como IoT e machine learning.
          </p>
        </li>
        <li>
          <div className="container-text">
            <div className="logo-title">
              <img src="/images/dev-quest-logo.png" alt="Logo Dev Quest" />
              <h5>Dev Quest - Full Stack</h5>
            </div>
            <p>Jun 2024 - Jan 2025</p>
          </div>
          <p>
            - Desenvolvimento de Interfaces de Usuário. <br />
            - Designs Responsivos e criativos. <br />
            - Manutenção e Atualização de Websites. <br />
            - Integração com APIs. <br />
            -Testes e Debugging.
          </p>
        </li>
        <li>
          <div className="container-text">
            <div className="logo-title">
              <img src="/images/udemy-logo.png" alt="Logo Udemy" />
              <h5>Udemy - Front-End</h5>
            </div>
            <p>Feb 2024 - Jun 2024</p>
          </div>
          <p>
            - HTML e CSS; <br />
            - JavaScript; <br />
            - React; <br />- E uma imersão em TypeScript com foco em React.
          </p>
        </li>
        <li>
          <div className="container-text">
            <div className="logo-title">
              <img
                src="/images/curso-em-video-logo.png"
                alt="Logo Curso em Video"
              />
              <h5>Curso em Video</h5>
            </div>
            <p>Jun 2022 - Feb 2024</p>
          </div>
          <p>
            Começando os estudos com aulas sobre algoritimos e logica de
            programação. Partindo depois para Python, HTML5 e CSS3. Depois Git e
            GitHub, Java Script e MySQL.
          </p>
        </li>
      </ul>
    </section>
  );
};
