import ProjectsPreview from "./ProjectsPreview";
import { Link } from "react-router-dom";

const PortfolioPreview = () => {
  function ResetLocation() {
    window.scrollTo(0, 0);
  }
  return (
    <article className="portfolio">
      <section className="portfolio-text">
        <h2 className="title-font pink-text h2-tag">My Portfolio</h2>
        <p className="white-text p-tag">
          I have worked on several real-world projects, individually and
          collaboratively. Here are some of my favorite ones which sum up my
          knowledge. You can check the projects on my{" "}
          <span>
            <a
              href="https://github.com/QurayshSaif?tab=repositories"
              className="pink-text"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>
        </p>
      </section>
      <ProjectsPreview />
      <section>
        <Link
          onClick={ResetLocation}
          className="more-projects-btn pink-text"
          to="/portfolio"
        >
          More projects
        </Link>
      </section>
    </article>
  );
};

export default PortfolioPreview;
