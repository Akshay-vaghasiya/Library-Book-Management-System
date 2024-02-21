import { createContext, useState, useContext, useEffect } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);
    const [adminemail, setAdminemail] = useState("");

    useEffect(() => {
        if(localStorage.getItem("ADMIN_EMAIL") !== "")
        {
            setIsLogin(true);
        }
    })


    return (
        <>
            <LoginContext.Provider value={{ isLogin, setIsLogin, adminemail, setAdminemail}}>
                {children}
            </LoginContext.Provider>
        </>
    )
};

const useLoginContext = () => {
    return useContext(LoginContext);
}

export { LoginProvider, useLoginContext };