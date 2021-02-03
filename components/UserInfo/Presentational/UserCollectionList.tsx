import React from 'react';

// 타입
import {ICollectionDetail, ICollectionInfo} from '../../../models/userInfo'

const UserCollectionList : React.FC<{data : ICollectionDetail}> = ({
  data : {
    detail, 
    getCount, 
    title, 
    totalCount
  }
}) => {
  const parsedDetail = ParseDetail(detail)

  return(
    <div className="userCollectionWrap">
      <div className="userCollectionTitle textCenter">{title}</div>
      <div className="userCollectionCount textCenter rem09">
        {getCount} / {totalCount}
      </div>
      <div className="userCollectionDetailWrap">
      {parsedDetail.map((arr : ICollectionInfo[], index) => {
        const side = index === 0 ? 'Left' : 'Right';
        return <UserCollectionSideWrap 
                  key={`userCollectionSide${side}`}
                  side={side}
                  index={index}
                  arr={arr}
               />
      })}
      </div>
    </div>    
  )
}

function ParseDetail(detail){
  return detail.reduce((prev, cur) => {
    if(cur.isGet){
      prev[0].push(cur)
    }else{
      prev[1].push(cur)
    }
    return prev;
  }, [[],[]]);
}

interface IUserCollectionSideWrap {
  side : string
  index : number
  arr : ICollectionInfo[]
}

const UserCollectionSideWrap : React.FC<IUserCollectionSideWrap> = ({
  side, 
  index, 
  arr
}) => {
  return(
    <div className={`userCollectionSide userCollection${side}`}>
      <div className="userCollectionIsGet textCenter">
        {index === 0 ? '획득' : '미획득'}
      </div>
      {arr.map((col, colIndex) => {
        return <UserCollection 
                  key={`userCollection${colIndex}`}
                  col={col}
               />
      })}
    </div>
  )
}

const UserCollection : React.FC<{col : ICollectionInfo}> = ({
  col
}) => {
  return (
    <div className="userCollection">
      <div className="userCollectionNo">{col.no}.</div>
      <div className="userCollectionName overflowDot">{col.name}</div>
    </div>
  )
}

export default UserCollectionList;