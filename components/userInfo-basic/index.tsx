import React from "react";
import _ from "utility/utility";
import "./index.css";

// 컴포넌트
import ImgTextWrap from "components/_imgTextWrap";
import TextWrap from "components/_textWrap";
import UserCollection from "components/userInfo-collectionNav/index";

const Index = ({ userData }) => {
  const { basicInfo, expeditionInfo, collectionInfo } = userData;
  const {
    className,
    classSrc,
    curBigLv,
    curSmallLv,
    expeditionLv,
    garden,
    guild,
    pvp,
    reachBigLv,
    reachSamllLv,
    title,
  } = basicInfo;
  const { name, server, Lv } = expeditionInfo;
  const { collectionMini } = collectionInfo;

  return (
    <div className="searchedUserInfo">
      <div className="basicInfo">
        <TextWrap text={["클래스"]} />
        <ImgTextWrap backSrc={classSrc} text={[className]} />
      </div>
      <div className="basicInfo">
        <TextWrap text={["이름", `${Lv} ${name}`]} />
        <TextWrap text={["원정대 레벨", `${server} Lv ${expeditionLv}`]} />
      </div>
      <div className="basicInfo">
        <TextWrap text={["현재 아이템 레벨", curBigLv, curSmallLv]} />
        <TextWrap text={["달성 아이템 레벨", reachBigLv, reachSamllLv]} />
      </div>
      <div className="basicInfo">
        <TextWrap text={["영지", garden]} />
        <TextWrap text={["PVP", pvp]} />
      </div>
      <div className="basicInfo">
        <TextWrap text={["칭호", title]} />
        <TextWrap text={["길드", guild]} />
      </div>
      <div className="userInfoCollection">{UserCollection(collectionMini)}</div>
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
