import { FaGithub, FaLink } from "react-icons/fa";
import { Projects } from "../../data/Projects";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
  ProjectDescription,
  ProjectImageContainer,
  SingleProject,
  StyledProjectSection,
  Tags,
} from "../styles/sections/ProjectSection.styled";

export const ProjectsSection = () => {
  return (
    <>
      <StyledProjectSection id="projects">
        <SectionHeading>
          <h1>Community Projects</h1>
          <p>These are some of the activities we have achieved</p>
        </SectionHeading>

        <div>
          {Projects &&
            Projects.map((project, index) => (
              <SingleProject key={index}>
                <ProjectImageContainer
                  href={project.projectlink}
                  target="_blank"
                >
                  <img src={project.thumbnail} alt={project.title} />
                </ProjectImageContainer>
                <ProjectDescription>
                  <h1>{project.title}</h1>
                  <Tags>
                    {project.tags &&
                      project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex}>{tag}</span>
                      ))}
                  </Tags>
                  <p>{project.paragraph}</p>
                  <div>
                    <a href={project.codelink} target="_blank">
                      <FaGithub />
                      <span>View Notes</span>
                    </a>
                    <a href={project.projectcodelink} target="_blank">
                      <FaLink />
                      <span>{project.projectlinkText}</span>
                    </a>
                  </div>
                </ProjectDescription>
              </SingleProject>
            ))}
        </div>
      </StyledProjectSection>
    </>
  );
};
