import { createContext, useContext } from "react";

const userContext = createContext({ what: "helloiii" });

export const UserContextProvider = userContext.Provider;

export default function useUser() {
    return useContext(userContext);
}