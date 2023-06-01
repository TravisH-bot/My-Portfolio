import React from "react";
import Tilt from "react-parallax-tilt";
import { Card } from "@material-tailwind/react";
import "../../gitHubLogo/GitHubLogo.css";

function Project(props) {
  return (
    <Tilt gyroscope={true} tiltMaxAngleX={3} tiltMaxAngleY={3}>
      <Card
        id="projects"
        className="projects bg-inherit rounded-0 border-2 border-black mt-6 w-auto shadow-2xl dark:shadow-[0_8px_14px_0px_rgba(255,255,255,0.3)]"
      >
        <div className="projectTitles grid grid-flow-col auto-cols-2">
          <div className="liveSite">
            <button className="mainBtn" role="button">
              <a href={props.link} target="_blank" rel="noreferrer">
                {props.title}
              </a>
            </button>
            <h6 className="live text-xl">Live Demo</h6>
          </div>
          <div className="repoSite">
            <button className="logo">
              <a href={props.linkTwo} target="_blank" rel="noreferrer">
                <div id="repo">
                  <h3 className="projTitle">Repository</h3>
                </div>
                <div className="myGitLogo">
                  <svg
                    className="myLogo"
                    width="60"
                    height="60"
                    viewBox="0 0 90 60"
                    fill="none"
                  >
                    <g id="github-logo-svgrepo-com 1">
                      <g id="SVGRepo_iconCarrier">
                        <g id="lightGroup">
                          <g id="light" opacity="1">
                            <circle
                              id="lightEllipse"
                              cx="30.5"
                              cy="30.5"
                              r="27.5"
                            />
                            <path
                              id="vectorOne"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M29.9976 5C16.1943 5 5 16.4761 5 30.6336C5 41.9569 12.1626 51.5651 22.0969 54.9564C23.3477 55.1907 23.8035 54.399 23.8035 53.7194C23.8035 53.1104 23.782 51.4992 23.7697 49.3607C16.8159 50.9091 15.3487 45.924 15.3487 45.924C14.2114 42.9626 12.5724 42.1739 12.5724 42.1739C10.3025 40.5847 12.7442 40.6163 12.7442 40.6163C15.2535 40.7971 16.5734 43.2582 16.5734 43.2582C18.8033 47.1748 22.4253 46.0435 23.8495 45.3875C24.0767 43.7319 24.7228 42.6022 25.4364 41.9615C19.8853 41.3132 14.0488 39.1151 14.0488 29.2929C14.0488 26.4935 15.0233 24.2071 16.6225 22.4148C16.3647 21.7665 15.5068 19.1606 16.8681 15.6311C16.8681 15.6311 18.966 14.9418 23.7421 18.2573C25.7357 17.6893 27.8751 17.406 30.0007 17.395C32.1248 17.406 34.2627 17.6893 36.2594 18.2573C41.0324 14.9418 43.1271 15.6311 43.1271 15.6311C44.4918 19.1606 43.6339 21.7665 43.3775 22.4148C44.9797 24.2071 45.9466 26.4935 45.9466 29.2929C45.9466 39.1403 40.1008 41.307 34.5328 41.9411C35.4291 42.7328 36.2286 44.297 36.2286 46.6888C36.2286 50.1143 36.198 52.8791 36.198 53.7194C36.198 54.4055 36.6492 55.2034 37.9169 54.9529C47.8436 51.5559 55 41.9554 55 30.6336C55 16.4761 43.8057 5 29.9976 5Z"
                            />
                          </g>
                        </g>
                        <g id="darkGroup">
                          <g id="dark" opacity="1">
                            <circle
                              id="darkEllipse"
                              cx="30.5"
                              cy="30.5"
                              r="27.5"
                            />
                            <path
                              id="vectorTwo"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M29.9976 5C16.1943 5 5 16.4761 5 30.6336C5 41.9569 12.1626 51.5651 22.0969 54.9564C23.3477 55.1907 23.8035 54.399 23.8035 53.7194C23.8035 53.1104 23.782 51.4992 23.7697 49.3607C16.8159 50.9091 15.3487 45.924 15.3487 45.924C14.2114 42.9626 12.5724 42.1739 12.5724 42.1739C10.3025 40.5847 12.7442 40.6163 12.7442 40.6163C15.2535 40.7971 16.5734 43.2582 16.5734 43.2582C18.8033 47.1748 22.4253 46.0435 23.8495 45.3875C24.0767 43.7319 24.7228 42.6022 25.4364 41.9615C19.8853 41.3132 14.0488 39.1151 14.0488 29.2929C14.0488 26.4935 15.0233 24.2071 16.6225 22.4148C16.3647 21.7665 15.5068 19.1606 16.8681 15.6311C16.8681 15.6311 18.966 14.9418 23.7421 18.2573C25.7357 17.6893 27.8751 17.406 30.0007 17.395C32.1248 17.406 34.2627 17.6893 36.2594 18.2573C41.0324 14.9418 43.1271 15.6311 43.1271 15.6311C44.4918 19.1606 43.6339 21.7665 43.3775 22.4148C44.9797 24.2071 45.9466 26.4935 45.9466 29.2929C45.9466 39.1403 40.1008 41.307 34.5328 41.9411C35.4291 42.7328 36.2286 44.297 36.2286 46.6888C36.2286 50.1143 36.198 52.8791 36.198 53.7194C36.198 54.4055 36.6492 55.2034 37.9169 54.9529C47.8436 51.5559 55 41.9554 55 30.6336C55 16.4761 43.8057 5 29.9976 5Z"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </a>
            </button>
          </div>
        </div>
        <li key={props.i} className={props.classes} id={props.id || ""}></li>
        <div className="techUsed">
          <h3 className="projTitle">Project Description</h3>
          <ul className="techItems">
            <li>
              <span className="font-bold text-decoration-underline text-gray-50 dark:text-black">
                Project summary
              </span>{" "}
              - {props.projectSummary}
            </li>
            <li>
              <span className="font-bold text-decoration-underline text-gray-50 dark:text-black">
                Concepts
              </span>{" "}
              - {props.concepts}
            </li>
            <li>
              <span className="font-bold text-decoration-underline text-gray-50 dark:text-black">
                Technologies used
              </span>{" "}
              - {props.technologiesUsed}
            </li>
          </ul>
        </div>
      </Card>
    </Tilt>
  );
}

export default Project;
