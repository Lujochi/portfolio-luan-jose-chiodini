import "./Contact.css";

export const Contact = () => {
  return (
    <section id="Contact">
      <div className="contact-text">
        <h3>Contact</h3>
        <p>
          Entre em contato comigo por whatsapp, email, instagram e linkdin, tem
          meu perfil do GitHub aqui também, da uma passada lá para ver no que
          estou trabalhando no momento!
        </p>
        <i className="ri-mail-line mail"></i>
        <a
          className="email-a"
          href="https://mailto:a.luanjc@gmail.com"
          target="_blank"
        >
          a.luanjc@gmail.com
        </a>
        <div className="logos-social">
          <a
            href="https://wa.me/+5547991653010"
            target="_blank"
            className="logo-a"
          >
            <i className="ri-phone-line"></i>
          </a>
          <a
            href="https://www.instagram.com/lujochii/"
            target="_blank"
            className="logo-a"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="https://github.com/Lujochi"
            target="_blank"
            className="logo-a"
          >
            <i className="ri-github-line"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lujochi/"
            target="_blank"
            className="logo-a"
          >
            <i className="ri-linkedin-line"></i>
          </a>
        </div>
        <span>&copy; 2025</span>
      </div>
    </section>
  );
};
