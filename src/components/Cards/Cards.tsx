import { Card } from "../Card/Card";

const projectCards = [
  {
    cardTitle: "Box Shadow",
    cardImage: "./images/project-thumbnail-box-shadow.png",
    cardUrl: "#",
  },
  {
    cardTitle: "Multi Steps Form",
    cardImage: "./images/project-thumbnail-multi-step-form.jpg",
    cardUrl: "#",
  },
  {
    cardTitle: "Api Rest",
    cardImage: "./images/project-thumbnail-api-rest.png",
    cardUrl: "#",
  },
  {
    cardTitle: "Dev Notes",
    cardImage: "./images/project-thumbnail-dev-notes.png",
    cardUrl: "#",
  },
  {
    cardTitle: "Ecommerce",
    cardImage: "./images/project-thumbnail-ecommerce.png",
    cardUrl: "#",
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
              <a href={projectCards.cardUrl}>
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
