import React, { useRef } from 'react';
import _ from '../../../Utility';
import { useRouter } from 'next/router'

// 타입
import HomeData from '../../../models/homeData';

interface Props {
  homeData : HomeData
  getUserData(p1 : string, p2? : ReturnType<typeof useRouter>) : void
  setHomeData(p1 : ReturnType<typeof useRouter>) : void
}

const Header : React.FC<Props> = ({
  homeData,
  getUserData,
  setHomeData,
}) => {
  let textInput = useRef(null);
  const router = useRouter();
  const userOnSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.target[0].value;
    getUserData(value, router)
    textInput.current.value = null;
  }
  return(
    <div className="header">
      <div className="innerHeader">
        <div className="logo"
          onClick={() => {
            if(!homeData) return setHomeData(router);
            router.push('/');
          }}
        >
        </div>
        <form onSubmit={userOnSubmit} className="searchForm">
          <input type="text" name="searchedUser" ref={textInput}/>
          <input type="submit" className="rem1" value="검색"/>
        </form>
      </div>
    </div>
  )
}

export default React.memo(Header, () => true);