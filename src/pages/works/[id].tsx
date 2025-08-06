import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../data/data.json";

export default function ProjectDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [project] = useState(
    id && data.find((project) => project.id === parseInt(id))
  );

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  },[])

  return (
    <div className="inner p-sm" data-wrap="ProjectDetail">
      {project ? (
        <div>
          <h2 className="mt-4">{project.title}</h2>
          <p className="mt-2">{project.description}</p>
          <img
            src={project.thumbnail}
            alt={project.title}
            className="mt-4  img-fluid"
          />
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
      <button
        className="btn btn-primary mt-4"
        onClick={() =>
          navigate("/", {
            state: { activeMenu: 2 },
          })
        }
      >
        목록으로 돌아가기
      </button>
    </div>
  );
}
