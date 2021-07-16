import { getOnlyText } from "utils/parse-string";

interface TripodSkillCustom {
  name: string;
  desc: string;
  grade: string;
  src: string | null;
}
interface ItemPartBox {
  title: string;
  desc: string;
}

interface BattleSkill {
  usePoint: number;
  getPoint: number;
  skills: {
    backSrc: string;
    divideType: string;
    type: string;
    detail: {
      subTitle: string[];
      title: string;
      tripodSkillCustom: TripodSkillCustom[];
      rune: { itemPartBox: ItemPartBox; runeImg: string; runeGrade: string };
    };
  }[];
}
interface LifeSkill {
  type: string;
  divideType: string;
  backSrc: string;
  detail: {
    title: string;
    subTitle: string[];
  };
}

interface Props {
  battleSkill: BattleSkill;
  lifeSkill: LifeSkill[];
}

export default class SkillInfo implements Props {
  battleSkill: BattleSkill = {
    usePoint: 0,
    getPoint: 0,
    skills: [],
  };
  lifeSkill: LifeSkill[];

  constructor(profileObj, raw) {
    const battleSkill = raw.getElementsByClassName("profile-skill-battle")[1];
    const lifeSkill = raw.getElementsByClassName("profile-skill-life")[0];

    // 전투스킬 정보가 있는경우만
    if (profileObj) this.setBattleSkill(profileObj.Skill, battleSkill);

    // 생활스킬
    this.setLifeSkill(lifeSkill);
  }

  setBattleSkill(skill, battleSkill) {
    const children = battleSkill.children;
    const use = children[0].children[1].textContent;
    const get = children[0].children[3].textContent;
    const useSkillList = [...children[1].children]
      .map(el => el.children[0])
      .filter(el => {
        const check = el.children[2].children[0].textContent;
        if (check === "각성기" || check !== "1") {
          return el;
        }
        return null;
      });

    const skillArr = Object.values(skill);
    const half = Math.ceil(useSkillList.length / 2);
    const skills = useSkillList.map((el, index) => {
      const children = el.children;
      const skillImg = children[0].children[0].attributes[0].value;
      const skillType = children[1].children[0].textContent;
      const skillName = children[1].children[1].textContent;
      const matchSkillArr = skillArr.find(
        res => res["Element_000"].value === skillName
      );
      const skillLv = children[2].children[0].textContent;
      const type = "battleSkill";
      const divideType = index < half ? "leftSkill" : "rightSkill";
      let tripodSkillCustom = [];
      let rune = null;

      if (skillLv !== "각성기") {
        const TripodSkillCustom = Object.values(matchSkillArr).filter(
          res => res.type === "TripodSkillCustom"
        );
        TripodSkillCustom?.forEach(res => {
          const els = Object.values(res.value);
          els.forEach(({ name, desc, slotData }) => {
            tripodSkillCustom.push({
              name: getOnlyText(name),
              desc: getOnlyText(desc),
              grade: slotData?.iconGrade,
              src: slotData?.iconPath
                ? "//cdn-lostark.game.onstove.com/" + slotData?.iconPath
                : null,
            });
          });
        });
      }
      if (children[1].children[3].attributes["data-runetooltip"]) {
        const runeJSON = JSON.parse(
          children[1].children[3].attributes["data-runetooltip"].value
        );
        const ItemPartBox = Object.values(runeJSON).find(
          res => res["type"] === "ItemPartBox"
        ) as any;
        const vals = Object.values(ItemPartBox.value);

        rune = {
          runeInfo: [getOnlyText(vals[1])],
          runeImg: children[1].children[3].children[0].attributes["src"].value,
          runeGrade: getOnlyText(runeJSON.Element_001.value.leftStr0),
        };
      }

      return {
        type,
        divideType,
        backSrc: skillImg,
        detail: {
          title: `Lv${skillLv} ${skillName} `,
          subTitle: [skillType],
          hover: true,
          tripodSkillCustom,
          rune,
        },
      };
    });
    this.battleSkill = {
      usePoint: use,
      getPoint: get,
      skills,
    };
  }

  setLifeSkill(lifeSkill: Element) {
    const li = lifeSkill.children[1].children;
    const half = Math.ceil(li.length / 2);
    this.lifeSkill = [...li].map((li, index) => {
      const divideType = index < half ? "leftSkill" : "rightSkill";
      const type = "lifeSkill";
      const backSrc = `${process.env.PUBLIC_URL}/img/lifeskill/${index}.PNG`;

      return {
        type,
        divideType,
        backSrc,
        detail: {
          title: li.children[0].textContent,
          subTitle: [li.children[1].textContent],
        },
      };
    });
  }
}
