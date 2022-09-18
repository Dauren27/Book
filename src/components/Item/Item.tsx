import React, { useState, useContext } from "react";
import cl from "./Item.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router";
import { TopicContext } from "../../context";

interface ItemProps {
  title?: "string";
}
const Item: React.FC<ItemProps> = ({ title = "Тема" }) => {
  const [open, setOpen] = useState(false);
  const [topics, setTopics] = useState(["Подтема", "Подтема 2", "Подтема 3"]);
  const { topic, setTopic, menuOpen, setMenuOpen } = useContext(TopicContext);
  const navigate = useNavigate();
  const navigateToTopicPage = (subtopic: number | string) => {
    navigate(`/topic/${subtopic}`);
  };
  return (
    <div className={cl.sidebar__item}>
      <h1 className={cl.sidebar__title} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <IoIosArrowDown />
      </h1>
      <ul className={`${cl.sidebar__subtitles} ${open && cl.open}`}>
        {topics.map((topic, index) => (
          <li
            key={topic}
            className={cl.sidebar__subtitle}
            onClick={() => {
              navigateToTopicPage(index);
              setTopic(topic);
              setMenuOpen(!menuOpen)
            }}
          >
            <a>{topic}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
