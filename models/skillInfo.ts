export interface IRune {
  runeGrade : string
  runeImg : string
  runeInfo : {
    value : {
      Element_001 : string
    }
  }
}

export interface IBSkillTripod {
  value : {
    key : {
      name : string
      desc : string
      tier : string
      slotData : {
        iconPath : string
      }
    }
  }
}

export interface IBSkillDetail {
  rune : IRune
  skillImg : string
  skillLv : string
  skillName : string
  skillTripod : IBSkillTripod
  skillType : string
}

export interface IBSkill {
  getPoint : number
  usePoint : number
  skillDetail : IBSkillDetail[]
}

export interface ILSkill {
  name : string
  lv : string
}

export default class SkillInfo {
  battleSkill : IBSkill = {
    getPoint : null,
    usePoint : null,
    skillDetail : null
  };
  lifeSkill : ILSkill[] = null;
  constructor(skill : object, raw : Element){
    const batteSkill = raw.getElementsByClassName('profile-skill-battle')[1];
    const lifeSkill = raw.getElementsByClassName('profile-skill-life')[0];

    //  전투스킬
    this.setBattleSkill(skill, batteSkill);

    // 생활스킬
    this.setLifeSkill(lifeSkill);
  }

  setBattleSkill(skill, batteSkill){
    const children = batteSkill.children;
    const use = children[0].children[1].textContent;
    const get = children[0].children[3].textContent;
    const useSkillList = [...children[1].children]
      .map(el => el.children[0])
      .filter(el => {
        const check = el.children[2].children[0].textContent;
        if(check === '각성기' || check !== '1'){
          return el
        }
        return null;
      });

    const skillArr = Object.values(skill);

    this.battleSkill.usePoint = use;
    this.battleSkill.getPoint = get;
    this.battleSkill.skillDetail = useSkillList.map((el : Element) => {
      const children = el.children
      const skillImg = children[0].children[0].attributes[0].value;
      const skillType = children[1].children[0].textContent;
      const skillName = children[1].children[1].textContent;
      const matchSkillArr = skillArr.find((res : Element) => res['Element_000'].value === skillName);
      const skillLv = children[2].children[0].textContent;

      let skillTripod = null;
      let rune = null;

      if(skillLv !== '각성기'){
        skillTripod = Object.values(matchSkillArr).find(res => res.type==="TripodSkillCustom")
      }
      if(children[1].children[3].attributes['data-runetooltip']){
        const runeJSON = JSON.parse(children[1].children[3].attributes['data-runetooltip'].value);
        rune = {
          runeInfo : Object.values(runeJSON).find(res => res['type']==="ItemPartBox"),
          runeImg : children[1].children[3].children[0].attributes['src'].value,
          runeGrade : runeJSON.Element_001.value.leftStr0
        }
      }

      return {
        skillImg, skillType, skillName, skillLv, skillTripod, rune
      }
    })
  }

  setLifeSkill(lifeSkill : Element){
    const li = lifeSkill.children[1].children;
    this.lifeSkill = [...li].map(li => {
      return {
        name : li.children[0].textContent,
        lv : li.children[1].textContent
      }
    })
  }
}
