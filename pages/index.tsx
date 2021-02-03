import { GetStaticProps } from 'next';
import { wrapper } from '../store'
import { useDispatch, useSelector } from 'react-redux'

import Layout from '../components/Layout'
import API from '../API'
import {RootState} from '../store'
import _ from '../Utility'

import HomeComponent from '../components/Root/Container/HomeContainer'
import { useEffect } from 'react';
import * as Actions from '../actions'
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {homeData, isLoading} = useSelector((state : RootState) => ({
    homeData : state.homeData,
    isLoading : state.isLoading
  }), (left, right) => {
    if(_.compareObj(left, right)) return true;
    return false;
  });

  // 유저정보창에서 새로고침 시, 404파일에서는 루트로 보내주고, 루트에서 주소가 기본이아니라면
  // 바로이동
  if(
    typeof window !== 'undefined' &&
    router.asPath !== '/'
  ){
    (function(l) {
      if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
          return s.replace(/~and~/g, '&')
        }).join('?');

        router.push(decoded + l.hash)
      }
    }(window.location))
    return null;
  }

  // 이유는 모르겠는데, SetHomeData할 때 로딩토글 같이꺼주니깐 로딩토글이 한템포 먼저꺼짐
  // 그래서, 돔 완성되고 꺼지도록 함
  useEffect(() => {
    dispatch(Actions.loadingToggle(false))
  }, [])

  return (
    <Layout title={'Loa Hands'} isLoading={isLoading}>
      {homeData && 
        <HomeComponent homeData={homeData} />
      }
    </Layout>
  )
}

// pre-rendering을 위해, homeData를 받아올 때 서버에서는 DOMParser를 인식하지 못함
//  왜냐, 정적생성을 할 때에는 DOM을 구성하기 전에 서버에서 실행되기 때문
//  따라서, useEffect로 일단 돔이 한번 생성되도록 하고, 그 이후에 homeData를 DOMParser로 가공

// 1. node.js express(던파유저랭크)에서 DOMParser가 작동되는지 확인해보자
//      ㅇㅇ DOMParser 없음 따라서 jsdom 모듈을 사용하는데, child_proecss를 찾을수 없다 에러가 뜸
//      알아보니, Next.js는 번들링과정을 클라이언트 한번, 서버 한번 총 2번 하는데 jsdom모듈은 서버에서 사용하는 모듈이라, 해당 모듈에서 사용하는 외부모듈들은
//      클라이언트에서 인식하지 못하는 모듈이라 발생하는 에러였다. 실제로, 터미널에 출력되는부분을 보면 서버에서 작동하는 번들링은 잘 진행되지만, 클라이언트쪽 번들링만 에러가 발생함을 알 수 있었다
//      커스텀 웹팩으로 클라이언트에서 번들링을 진행할 때, 해당 모듈들을 실행시키지 않도록 하니 정상작동되었다.

export const getStaticProps : GetStaticProps = wrapper.getStaticProps(
  async ({store, preview}) => {
    const homeData = await JSON.stringify(await API.getHomeData());
    store.dispatch({type : 'SET_HOME_DATA', loadingPop : false, homeData})
  }
)

export default Index