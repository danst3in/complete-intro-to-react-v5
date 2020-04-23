import { createContext } from "react";

// placing a hook inside this function
const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  () => {},
]);

export default ThemeContext;
