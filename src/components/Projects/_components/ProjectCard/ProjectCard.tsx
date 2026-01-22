import "./projectCard.css";

export interface CardProps {
  srcImage?: string;
  title: string;
  description: string;
}

export function ProjectCard({ srcImage, title, description }: CardProps) {
  return (
    <>
      <div className="project-card">
        <img className="img-project" src={srcImage} />
        <div className="texts-project">
          <h3 className="title-project">{title}</h3>
          <p className="desc-project">{description}</p>
          {/* <div className="actions-project">
            <button className="git-project">
              <img className="git-icon" src="gitIcon.png" alt="" />
            </button>
            <button className="link-project">

            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
