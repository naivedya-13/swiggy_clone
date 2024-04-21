import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Rishabh Tripathi",
    email: "tripathi1202@gmail.com",
  },
});

export default UserContext;
