import { useState } from "react";
import MenuContext from "./MenuContext";

const MenuContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuContext.Provider value={{ open, setOpen }}>
        {children}
      </MenuContext.Provider>
    </>
  );
};

export default MenuContextProvider;
