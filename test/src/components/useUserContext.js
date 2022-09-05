import React, { createContext, useState, useContext } from 'react'

//createContext를 사용하여 상태값을 담을 박스 생성 -> 그 박스의 이름을 지정(Context)
const Context = createContext()

//상위 컴포넌트에 UserContextProvider 컴포넌트를 감싸기 위한 설정
export function UserContextProvider({ children }) {
  //글로벌하게 관리하고 싶은 상태값 지정
  const [user, setUser] = useState(null)
  return (

    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export function useUserContext() {
  return useContext(Context)
}