import { Card } from "../Card/Card";

const projectCards = [
  {
    cardTitle: "Project Name",
    cardImage: "/images/project-thumbnail-1.png",
    cardUrl: "#",
  },
  {
    cardTitle: "Project Name",
    cardImage: "/images/project-thumbnail-1.png",
    cardUrl: "#",
  },
  {
    cardTitle: "Project Name",
    cardImage: "/images/project-thumbnail-1.png",
    cardUrl: "#",
  },
  {
    cardTitle: "Project Name",
    cardImage: "/images/project-thumbnail-1.png",
    cardUrl: "#",
  },
  {
    cardTitle: "Project Name",
    cardImage: "/images/project-thumbnail-1.png",
    cardUrl: "#",
  },
  {
    cardTitle: "Project Name",
    cardImage: "/images/project-thumbnail-1.png",
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
