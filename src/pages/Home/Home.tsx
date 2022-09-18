import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { TopicContext } from "../../context";
import cl from "./Home.module.scss";

interface HomeProps {
  topic?: string;
}
const Home: React.FC<HomeProps> = ({ topic = "Выберите тему" }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!topic) {
      navigate("/");
    }
  }, []);
  return (
    <div className={cl.home}>
      <h1 className={cl.home__title}>{topic}</h1>
      <p className={cl.home__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, neque!
        Atque ut voluptatibus dolores illo eligendi blanditiis autem delectus
        beatae animi, voluptate neque, sed fuga voluptates fugit aperiam enim
        maiores nihil. Dolores incidunt vel, mollitia voluptates voluptatum
        omnis vitae laudantium. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. <br />
        Molestiae sapiente, exercitationem id voluptatum quos sint velit, quod
        dolor voluptatibus incidunt harum vitae saepe nihil impedit omnis
        dignissimos rerum? Maiores fuga aliquam, quos a at, quisquam dolores
        sunt enim ad temporibus adipisci nostrum eaque reiciendis tenetur hic
        nisi totam officia provident commodi. Ducimus impedit odio nesciunt?
        Dignissimos reprehenderit, consequatur illum velit quidem modi iusto,
        libero, aliquid rem natus quis expedita repellat tempora excepturi! Unde
        voluptatem corporis, distinctio voluptatibus quaerat debitis excepturi!
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
        eveniet dolor atque repellat impedit, neque ducimus nihil voluptatem.
        Nemo, similique!
      </p>
      <div className={cl.home__video}>Видео</div>
      <div className={cl.home__code}>Code</div>
      <div className={cl.home__codeResult}>Code Result</div>
    </div>
  );
};

export default Home;
