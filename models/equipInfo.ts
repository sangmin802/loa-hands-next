import _ from "utility/utility";

export default class EquipInfo {
  hover: boolean;
  title: string;
  subTitle: (string | null)[] = [];
  quality: number;
  src: string;
  grade: number;
  itemPartBox: { title; desc }[] = [];
  indentStringGroup: { title: { val; active }; desc }[] = [];
  tripodSkillCustom: { name; desc; grade; src }[] = [];

  constructor(data) {
    const v = Object.values(data);
    const NameTagBox = this.findType(v, "NameTagBox"); // 아이템 이름
    const ItemTitle = this.findType(v, "ItemTitle"); // 아이템 세부 설명
    let ItemPartBox = this.filterType(v, "ItemPartBox");
    ItemPartBox = ItemPartBox.length === 0 ? null : ItemPartBox;
    let IndentStringGroup = this.filterType(v, "IndentStringGroup");
    IndentStringGroup =
      IndentStringGroup.length === 0 ? null : IndentStringGroup;
    let TripodSkillCustom = this.filterType(v, "TripodSkillCustom");
    TripodSkillCustom =
      TripodSkillCustom.length === 0 ? null : TripodSkillCustom;

    this.title = _.getOnlyText(NameTagBox.value) as string;

    let regex = new RegExp(/leftStr[0-9]/g);
    const subTitleArr = Object.keys(ItemTitle.value).filter(res =>
      res.match(regex)
    );
    subTitleArr.forEach(res => {
      let val = ItemTitle.value[res];
      if (val.includes("품질")) return;
      if (val === "") val = "아이템 레벨 -";
      this.subTitle.push(_.getOnlyText(val) as string);
    });
    this.quality = ItemTitle.value.qualityValue ?? null;
    this.src = ItemTitle.value.slotData.iconPath
      ? "//cdn-lostark.game.onstove.com/" + ItemTitle.value.slotData.iconPath
      : null;
    this.grade = ItemTitle.value.slotData.iconGrade ?? null;
    this.hover = true;

    // 텍스트 그룹 여러개의 구조
    ItemPartBox?.forEach(res => {
      const els = Object.values(res.value);
      this.itemPartBox.push({
        title: _.getOnlyText(els[0]),
        desc: _.getOnlyText(els[1]),
      });
    });

    // 텍스트 그룹이 여러개 있고, 각각의 타이틀을 갖고있는 구조
    //  c?Active = 활성화 or 비활성화
    IndentStringGroup?.forEach(res => {
      Object.values(res.value).forEach(({ topStr, contentStr: c1 }) => {
        let active = null;
        if (topStr.includes("#aaaaaa")) active = 0;
        if (topStr.includes("#aaaaaa'><FONT COLOR='")) active = null;
        // 제목
        const title = _.getOnlyText(topStr);
        let desc = [];
        // 값

        Object.values(c1).forEach(({ contentStr: c2 }) => {
          let active = null;
          if (c2.includes("#aaaaaa")) active = 0;
          if (c2.includes("#aaaaaa'><FONT COLOR='")) active = null;
          const val = _.getOnlyText(c2);
          desc.push({ val, active });
        });

        this.indentStringGroup.push({ title: { val: title, active }, desc });
      });
    });

    // 이미지와 등급 배경을 갖고있는 구조
    TripodSkillCustom?.forEach(res => {
      const els = Object.values(res.value);
      els.forEach(({ name, desc, slotData }) => {
        this.tripodSkillCustom.push({
          name: _.getOnlyText(name),
          desc: _.getOnlyText(desc),
          grade: slotData?.iconGrade,
          src: slotData?.iconPath
            ? "//cdn-lostark.game.onstove.com/" + slotData?.iconPath
            : null,
        });
      });
    });
    //   let sameDivideCount : number = 0;
    //   Object.values(data)
    //   .map((val : object) => {
    //     if(!val['type']) return {...val, type : 'innerValid'};
    //     return val;
    //   })
    //   .sort((a : object, b : object) => {
    //     const typeA = a['type'].toUpperCase();
    //     const typeB = b['type'].toUpperCase();
    //     if (typeA < typeB) return -1;
    //     if (typeA > typeB) return 1;
    //     return 0;
    //   })
    //   .reduce((prev, cur, index) => {
    //     if(index === 1) this[prev['type']+sameDivideCount] = prev;
    //     if(prev['type'] !== cur['type']){
    //       sameDivideCount = 0;
    //     }else{
    //       sameDivideCount++;
    //     }
    //     this[cur['type']+sameDivideCount] = cur;
    //     return cur;
    //   })
  }

  filterType(arr, type) {
    return arr.filter(res => res.type === type);
  }
  findType(arr, type) {
    return arr.find(res => res.type === type);
  }
}
