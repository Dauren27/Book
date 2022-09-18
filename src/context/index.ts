import { createContext } from "react";

type GlobalContent = {
  topic?: string;
  setTopic: (value: string) => void;
  menuOpen: boolean;
  setMenuOpen: (value:boolean)=>void;
};
export const TopicContext = createContext<GlobalContent>({
  topic: "",
  setTopic: () => {},
  menuOpen: false,
  setMenuOpen: () => {},
});
