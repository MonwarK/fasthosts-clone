import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import Router from "next/router"
import { useEffect } from 'react';

interface Props {
  isAuth: boolean,
  children?: any
}

export default function IsAuth({ isAuth, children } : Props) {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user && !isAuth) {
      Router.push("/profile")
    } else if (!user && isAuth) {
      Router.push("/login")
    }
  }, [user])

  if (isAuth && user || !isAuth && !user) {
    return (
      <div>
        {children}
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }

}
