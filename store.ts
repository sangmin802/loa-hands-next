import { createStore, applyMiddleware } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import ReduxThunk from 'redux-thunk'
import reducer from './reducer';


export type RootState = ReturnType<typeof reducer> // 앞으로 useSelector로 상태에 접근할 때 사용할 타입

const makeStore : MakeStore<RootState> = () => createStore(reducer, applyMiddleware(ReduxThunk))

export const wrapper = createWrapper<RootState>(makeStore, {debug : true});