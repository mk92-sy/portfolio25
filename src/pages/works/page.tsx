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
        <div className="view-select">
          <button
            className="type list"
            onClick={() => {
              setListType("list");
            }}
          >
            list-view
          </button>
          <button
            className="type grid"
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
              className="card"
              key={index}
            >
              <div className="thumnail-area">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="info-area">
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
