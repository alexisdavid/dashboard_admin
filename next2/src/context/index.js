// @flow
import React, { createContext, useState } from "react";
import { loadUser } from "./users";
import { useEffect } from "react";
export const Context = createContext();

const GlobalContext = (props) => {
  const [user,setUser]= useState('tengo estado')

  useEffect(() => {
  getInfo()
  }, []);
 async function getInfo(){
  let user =  await loadUser();
  if (user) {
     setUser(user)
  }
 }
  return (
    <Context.Provider value={{ loadUser, user }}  >
      {props.children}
    </Context.Provider>
  );
};
const Consumer = (Component) => {
  return (props) => {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  };
};
export { Consumer, GlobalContext };
