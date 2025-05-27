import { useParams } from "react-router-dom";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="inner p-sm" data-wrap="ProjectDetail">
      <p>Projects ID: {id}</p>
    </div>
  );
}
