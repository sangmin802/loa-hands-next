// import { GetStaticProps } from 'next';
// import { wrapper } from '../store'
// import { useDispatch, useSelector } from 'react-redux'
// import { useRouter } from "next/router";
import { useEffect } from "react";
import { dailyIsland, fieldBoss, chaosGate, oceanCont } from "json/JSON";
import DateOverHook from "hooks/dateOverHook";
import HomeDataHook from "hooks/homeDataHook";

// 컴포넌트
import Layout from "layout/layout";
import EventSection from "components/home-event/index";
import TimerSection from "components/home-timerSection/index";
import CalendarSection from "components/home-calendar/index";
import RefreshHook from "hooks/refreshHook";

const Index = () => {
  const { homeData, setHomeData } = HomeDataHook();

  DateOverHook(setHomeData);
  RefreshHook();

  useEffect(() => {
    if (!homeData) setHomeData();
  }, [homeData, setHomeData]);

  const today = new Date().getSeconds();
  const yoil = new Date().getDay();

  return (
    <Layout title={"Loa Hands"}>
      <section className="home">
        <EventSection events={homeData?.events} />
        <CalendarSection
          calendar={homeData?.calendar}
          today={today}
          yoil={yoil}
        />
        <TimerSection data={dailyIsland} today={today} text="오늘의 모험섬" />
        <TimerSection
          data={fieldBoss[yoil]}
          today={today}
          text="오늘의 필드보스"
        />
        <TimerSection
          data={chaosGate[yoil]}
          today={today}
          text="오늘의 카오스 게이트"
        />
        <TimerSection data={oceanCont[yoil]} today={today} text="오늘의 항해" />
      </section>
    </Layout>
  );
};

// pre-rendering을 위해, homeData를 받아올 때 서버에서는 DOMParser를 인식하지 못함
//  왜냐, 정적생성을 할 때에는 DOM을 구성하기 전에 서버에서 실행되기 때문
//  따라서, useEffect로 일단 돔이 한번 생성되도록 하고, 그 이후에 homeData를 DOMParser로 가공

// 1. node.js express(던파유저랭크)에서 DOMParser가 작동되는지 확인해보자
//      ㅇㅇ DOMParser 없음 따라서 jsdom 모듈을 사용하는데, child_proecss를 찾을수 없다 에러가 뜸
//      알아보니, Next.js는 번들링과정을 클라이언트 한번, 서버 한번 총 2번 하는데 jsdom모듈은 서버에서 사용하는 모듈이라, 해당 모듈에서 사용하는 외부모듈들은
//      클라이언트에서 인식하지 못하는 모듈이라 발생하는 에러였다. 실제로, 터미널에 출력되는부분을 보면 서버에서 작동하는 번들링은 잘 진행되지만, 클라이언트쪽 번들링만 에러가 발생함을 알 수 있었다
//      커스텀 웹팩으로 클라이언트에서 번들링을 진행할 때, 해당 모듈들을 실행시키지 않도록 하니 정상작동되었다.

// export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
//   async ({ store, preview }) => {
//     const homeData = await JSON.stringify(await API.getHomeData());
//     store.dispatch({ type: "SET_HOME_DATA", loadingPop: false, homeData });
//   }
// );

export default Index;
