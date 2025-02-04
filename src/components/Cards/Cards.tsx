import { Card } from "../Card/Card";

const projectCards = [
  {
    cardTitle: "Box Shadow",
    cardImage: "./images/project-thumbnail-box-shadow.png",
    cardUrl: "https://lujochi.github.io/Box-Shadow-Generator/",
  },
  {
    cardTitle: "Multi Steps Form",
    cardImage: "./images/project-thumbnail-multi-step-form.jpg",
    cardUrl:
      "https://github.com/Lujochi/Projeto-22-Udemy-form-multi-step-typescript",
  },
  {
    cardTitle: "Api Rest (Em produção)",
    cardImage: "./images/project-thumbnail-api-rest.png",
    cardUrl: "https://github.com/Lujochi/Projeto-API-REST",
  },
  {
    cardTitle: "Dev Notes",
    cardImage: "./images/project-thumbnail-dev-notes.png",
    cardUrl: "https://lujochi.github.io/DevNotes/",
  },
  {
    cardTitle: "Menu Hamburgueria",
    cardImage: "./images/project-thumbnail-hamburgueria.png",
    cardUrl: "https://github.com/Lujochi/cardapio-online-hamburgueria",
  },
  {
    cardTitle: "Portfolio",
    cardImage: "./images/project-thumbnail-portfolio.png",
    cardUrl: "#",
  },
];

export const Cards = () => {
  return (
    <>
      <div className="container-cards">
        {projectCards.map((projectCards, index) => {
          return (
            <Card key={index}>
              <a href={projectCards.cardUrl} target="_blank">
                <img src={projectCards.cardImage} alt="card" />
                <div className="text-box">
                  <h3>{projectCards.cardTitle}</h3>
                </div>
              </a>
            </Card>
          );
        })}
      </div>
    </>
  );
};
