import { useState } from "react";
import data from "../../data/data.json";
import { useNavigate } from "react-router-dom";

export default function WorksPage() {
  const [listType, setListType] = useState("list");
  const navigate = useNavigate();
  return (
    <div
      className="inner p-md"
      role="tabpanel"
      id="tabpanel-works"
      data-wrap="Works"
    >
      <div>
        <div>
          <button
            onClick={() => {
              setListType("list");
            }}
          >
            list-view
          </button>
          <button
            onClick={() => {
              setListType("grid");
            }}
          >
            grid-view
          </button>
        </div>
        <div className={`list-box ${listType}-view`}>
          {data.map((item, index) => (
            <button
              onClick={() => {
                navigate(item.url);
              }}
              className="item"
              key={index}
            >
              <img src={item.thumbnail} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
