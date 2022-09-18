import React, { useContext } from "react";
import cl from "./Sidebar.module.scss";
import Item from "../Item/Item";
import { TopicContext } from "../../context";

const Sidebar = () => {
  const { menuOpen, setMenuOpen } = useContext(TopicContext);
  return (
    <div className={`${cl.sidebar} ${ menuOpen && cl.sidebar__open}`}>
      <div className={cl.sidebar__content}>
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Sidebar;
