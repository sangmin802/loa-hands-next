import React from "react";
import styled from "styled-components";

const UserInfoWrap = styled.div`
  background: #000000;
  border-radius: 3px;
  padding: 1rem;
`;
const BasicInfoWrap = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
`;
const BasicInfo = styled.div`
  width: ${(props: { width: number }) => `${props.width}%`};
  display: flex;
  flex-wrap: wrap;
  margin: 0 0.3rem 0.3rem 0;
  padding-bottom: 15%;
  background: #1f222a;
`;

const UserCollectoinWrap = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const UserCollection = styled.div`
  flex-grow: 1;
  margin-right: ${(props: { num: number }) => {
    if (props.num !== 8) return ".5rem";
  }};
  background: #1f222a;
  padding-bottom: 5%;
  border-radius: 3px;
`;

const UserEquipWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const UserEquipColumn = styled.div`
  width: calc((100% - 0.5rem) / 2 - 0.1px);
`;

const UserEquip = styled.div`
  padding: 2rem;
  margin-bottom: 10px;
  background: #1f222a;
  border-radius: 3px;
`;
const Index = () => {
  return (
    <UserInfoWrap>
      <BasicInfoWrap>
        {[80, 45, 45, 35, 35, 35, 35, 35, 35].map((i, index) => (
          <BasicInfo width={i} key={index + "basicInfo"} />
        ))}
      </BasicInfoWrap>
      <UserCollectoinWrap>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
          <UserCollection num={i} key={index + "collection"} />
        ))}
      </UserCollectoinWrap>
      <UserEquipWrap>
        <UserEquipColumn>
          {[1, 2, 3, 4, 5, 6].map((i, index) => (
            <UserEquip key={index + "userEquip"} />
          ))}
        </UserEquipColumn>
        <UserEquipColumn>
          {[1, 2, 3, 4, 5, 6].map((i, index) => (
            <UserEquip key={index + "userEquip"} />
          ))}
        </UserEquipColumn>
      </UserEquipWrap>
    </UserInfoWrap>
  );
};

export default Index;
