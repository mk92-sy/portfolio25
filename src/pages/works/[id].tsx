import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import data from "../../data/data.json";

export default function ProjectDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const currentId = id ? parseInt(id) : null;

  const [project, setProject] = useState(() =>
    currentId !== null ? data.find((p) => p.id === currentId) : undefined
  );

  const activeMenu = location.state?.activeMenu ?? 2;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    if (currentId !== null) {
      const found = data.find((p) => p.id === currentId);
      setProject(found);
    }
  }, [currentId]);

  const currentIndex = data.findIndex((p) => p.id === currentId);
  const isFirst = currentIndex === 0 || activeMenu === 0;
  const isLast = currentIndex === data.length - 1;

  const goToPrevious = () => {
    if (!isFirst) {
      const prevProject = data[currentIndex - 1];
      navigate(`/works/${prevProject.id}`, {
        state: { activeMenu },
      });
    }
  };

  const goToNext = () => {
    if (!isLast) {
      const nextProject = data[currentIndex + 1];
      navigate(`/works/${nextProject.id}`, {
        state: { activeMenu },
      });
    }
  };

  return (
    <div className="inner" data-wrap="ProjectDetail">
      <div className="main-container">
        <div className="card">
          {project ? (
            <div>
              <h2>{project.title}</h2>
              <p className="mt-2">{project.description}</p>
              {project.thumbnail !== '' && project.title !== "" && (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="mt-4 img-fluid"
                />
              )}
              <p className="mt-2">사용 기술: {project.technologies}</p>
              <p className="mt-2">
                프로젝트 링크:{" "}
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.url}
                </a>
              </p>
              <p className="mt-2">프로젝트 기간: {project.period}</p>
              <p className="mt-2">프로젝트 설명: {project.description}</p>
            </div>
          ) : (
            <p>해당 프로젝트를 찾을 수 없습니다.</p>
          )}

          <div className="btn-area mt-4">
            {!isFirst && (
              <button className="btn btn-primary" onClick={goToPrevious}>
                이전 글
              </button>
            )}
            <button
              className="btn btn-primary"
              onClick={() => navigate("/", { state: { activeMenu } })}
            >
              목록으로 돌아가기
            </button>
            {!isLast && (
              <button className="btn btn-primary" onClick={goToNext}>
                다음 글
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
