import { createContext } from "react";

// placing a hook inside this function
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
