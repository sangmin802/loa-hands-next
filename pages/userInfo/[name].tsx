import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';

import UserInfoContainer from '../../components/UserInfo/Container/UserInfoContainer'
import { RootState } from '../../store';

const UserInfoRoute = () => {
  const router = useRouter();
  const {name} = router.query;
  const isLoading = useSelector((state : RootState) => state.isLoading);

  // 자꾸 서버에서도 작동되는것 같아, 서버환경이라면 미작동으로 함
  if(typeof window === 'undefined') return null;

  return (
    <>
    {name &&
      <Layout title={`유저정보 - ${name}`} isLoading={isLoading}>
        <UserInfoContainer name={name as string}/>
      </Layout>
    }
    </>
  );
}


export default UserInfoRoute;