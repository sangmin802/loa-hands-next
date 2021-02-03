import React from 'react';

// 타입
import {ILSkill} from '../../../models/skillInfo'

const LifeSkillList : React.FC<{data : ILSkill[]}> = ({
  data
}) => {
  return(
    <div className="userLifeSkillWrap">
      {data.map((skill, index) => {
        return <LifeSkill 
                  key={`lifeSkillList${index}`}
                  skill={skill}
               />
      })}
    </div>
  )
}

const LifeSkill : React.FC<{skill : ILSkill}> = ({
  skill
}) => {
  return(
    <div className="lifeSkillList">
      <div className="lifeSkillLv">{skill.lv}</div>
      <div className="lifeSkillName">{skill.name}</div>
    </div>
  )
}

export default LifeSkillList;