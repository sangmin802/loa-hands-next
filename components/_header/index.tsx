import React, { useCallback, useRef } from "react";
import "./index.css";
import HomeDataHook from "hooks/homeDataHook";
import UserDataHook from "hooks/userDataHook";

const Index = () => {
  let textInput = useRef(null);

  const { homeData, setHomeData } = HomeDataHook();
  const { setUserData } = UserDataHook();

  const userOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.target[0].value;
    setUserData(value);
    textInput.current.value = null;
  };

  const goHome = useCallback(() => {
    setHomeData(homeData);
  }, [homeData, setHomeData]);

  return (
    <div className="header">
      <div className="innerHeader">
        <div className="logo" onClick={goHome}></div>
        <form onSubmit={userOnSubmit} className="searchForm">
          <input type="text" name="searchedUser" ref={textInput} />
          <input type="submit" className="rem1" value="검색" />
        </form>
      </div>
    </div>
  );
};

export default React.memo(Index, () => true);
