import React, { useEffect } from "react";
import Layout from "layout/layout";
import UserInfoBlank from "template/userInfoBlank";
import UserExpeditionPop from "components/userInfo-expeditionPop/index";
import UserBasicInfo from "components/userInfo-basic/index";
import UserExpeditionChars from "components/userInfo-expeditionChars/index";
import UserDataHook from "hooks/userDataHook";
import SubTab from "components/userInfo-subTab/index";
import MainTab from "components/userInfo-mainTab/index";
import TabContent from "components/userInfo-tabContents/index";
import ExpeditionPopHook from "hooks/expeditionPopHook";
import UserNameHook from "hooks/userNameHook";
import LoadingToggleHook from "hooks/loadingToggleHooks";

const UserInfoRoute = () => {
  const name = UserNameHook();
  const { userData, setUserData } = UserDataHook();
  const { expeditionPop, setExpeditionPop } = ExpeditionPopHook();
  const { setisLoading } = LoadingToggleHook();

  useEffect(() => {
    if (!userData && name) setUserData(name);
  }, [name, setUserData, userData]);

  useEffect(() => {
    if (userData) setisLoading();
  }, [setisLoading, userData]);

  return (
    <Layout title={`유저정보 - ${name}`}>
      {!userData && <UserInfoBlank />}
      {userData && (
        <section className="userInfo">
          <section className="userInfoTop">
            <UserExpeditionPop expeditionPopToggle={setExpeditionPop} />
            <UserExpeditionChars
              userData={userData}
              setUserData={setUserData}
              expeditionPop={expeditionPop}
              setExpeditionPop={setExpeditionPop}
            />
            <UserBasicInfo userData={userData} />
          </section>
          <section className="userInfoBottom">
            <MainTab />
            <SubTab data={userData} />
            <TabContent data={userData} />
          </section>
        </section>
      )}
    </Layout>
  );
};

export default UserInfoRoute;
