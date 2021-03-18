//  혹시나 막힐 경우를 대비하여 남겨둠
const User = {
  basicInfo: {
    expeditionLv: "221",
    title: "-",
    curBigLv: "1,402",
    curSmallLv: ".50",
    reachBigLv: "1,402",
    reachSamllLv: ".50",
    guild: "지칠때쉬러와",
    pvp: "8단",
    garden: "Lv.65 동산",
    className: "바드",
    classSrc:
      "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/bard_m.png",
    classEngName: "bard",
  },
  expeditionInfo: {
    name: "모여요꿈동산",
    Lv: "Lv.57",
    server: "@아브렐슈드",
    expeditionUserWrap: [
      {
        server: "@아브렐슈드",
        charList: [
          { name: "이태원돈까스", lv: "Lv.54" },
          { name: "카드케챱체리", lv: "Lv.54" },
          { name: "군인시절", lv: "Lv.55" },
          { name: "워로드는뒤로점프", lv: "Lv.56" },
          { name: "퐁메라니안", lv: "Lv.54" },
          { name: "모여요꿈동산", lv: "Lv.57" },
        ],
      },
    ],
  },
  abilityInfo: {
    equipInfo: {
      "000_weapon": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_equipment_slot1.png?847938d1e0f475ca73717df97334937d",
        type: "Equip",
        detail: {
          hover: true,
          title: "+17 선택의 리아네 하프",
          subTitle: ["전설 리아네 하프", "아이템 레벨 1445 (티어 3)"],
          quality: 100,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/SM_Item/SM_Item_01_121.png",
          grade: 4,
          itemPartBox: [
            { title: "기본 효과", desc: "무기 공격력 +24241" },
            { title: "추가 효과", desc: "추가 피해 +15.00%" },
          ],
          indentStringGroup: [
            {
              title: { val: "트라이포드 효과", active: null },
              desc: [
                { val: "[바드] [사운드 홀릭] 사운드 집중 Lv +2", active: null },
                {
                  val: "[바드] [윈드 오브 뮤직] 빠른 준비 Lv +1",
                  active: null,
                },
              ],
            },
            {
              title: { val: "선택", active: null },
              desc: [
                { val: "선택 (리아네 하프)[전설]", active: null },
                { val: "선택 (머리 방어구)[전설]", active: null },
                { val: "선택 (상의)", active: 0 },
                { val: "선택 (하의)[전설]", active: null },
                { val: "선택 (장갑)[전설]", active: null },
                { val: "선택 (어깨 방어구)", active: 0 },
              ],
            },
            {
              title: { val: ["2 세트 효과", "[전설]"], active: null },
              desc: [
                {
                  val: [
                    "어비스 레이드 몬스터에게 공격 적중 시 '아르고스의 힘' 효과 획득",
                    " 아르고스의 힘: 20초 동안 적에게 주는 피해 20% 증가 (재사용 대기시간 60초)",
                  ],
                  active: null,
                },
              ],
            },
            {
              title: { val: ["5 세트 효과", "[전설]"], active: 0 },
              desc: [
                {
                  val: "가디언 등급 이하 몬스터에게 주는 피해 10% 증가",
                  active: 0,
                },
              ],
            },
          ],
          tripodSkillCustom: [],
        },
      },
      "001_head": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_equipment_slot2.png?050db99e03db1afa7f32f00f53010a0a",
        type: "Equip",
        detail: {
          hover: true,
          title: "+13 선택의 머리장식",
          subTitle: ["전설 머리 방어구", "아이템 레벨 1405 (티어 3)"],
          quality: 64,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/SM_Item/SM_Item_01_80.png",
          grade: 4,
          itemPartBox: [
            {
              title: "기본 효과",
              desc: [
                "물리 방어력 +3118",
                "마법 방어력 +3465",
                "지능 +10781",
                "체력 +2553",
              ],
            },
            {
              title: "추가 효과",
              desc: ["물리 방어력 +258", "마법 방어력 +401", "체력 +308"],
            },
          ],
          indentStringGroup: [
            {
              title: { val: "트라이포드 효과", active: null },
              desc: [
                { val: "[바드] [천상의 연주] 빠른 준비 Lv +2", active: null },
                {
                  val: "[바드] [수호의 연주] 끝나지 않는 수호 Lv +2",
                  active: null,
                },
              ],
            },
            {
              title: { val: "선택", active: null },
              desc: [
                { val: "선택 (리아네 하프)[전설]", active: null },
                { val: "선택 (머리 방어구)[전설]", active: null },
                { val: "선택 (상의)", active: 0 },
                { val: "선택 (하의)[전설]", active: null },
                { val: "선택 (장갑)[전설]", active: null },
                { val: "선택 (어깨 방어구)", active: 0 },
              ],
            },
            {
              title: { val: ["2 세트 효과", "[전설]"], active: null },
              desc: [
                {
                  val: [
                    "어비스 레이드 몬스터에게 공격 적중 시 '아르고스의 힘' 효과 획득",
                    " 아르고스의 힘: 20초 동안 적에게 주는 피해 20% 증가 (재사용 대기시간 60초)",
                  ],
                  active: null,
                },
              ],
            },
            {
              title: { val: ["5 세트 효과", "[전설]"], active: 0 },
              desc: [
                {
                  val: "가디언 등급 이하 몬스터에게 주는 피해 10% 증가",
                  active: 0,
                },
              ],
            },
          ],
          tripodSkillCustom: [],
        },
      },
      "002_shoulder": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_equipment_slot3.png?ad02ff0c0c7f0f750d7254629f61f433",
        type: "Equip",
        detail: {
          hover: true,
          title: "+8 냉혹한 맹세의 상의",
          subTitle: ["전설 상의", "아이템 레벨 1380 (티어 3)"],
          quality: 61,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/SM_Item/SM_Item_01_82.png",
          grade: 4,
          itemPartBox: [
            {
              title: "기본 효과",
              desc: [
                "물리 방어력 +4055",
                "마법 방어력 +3717",
                "지능 +7889",
                "체력 +3296",
              ],
            },
            {
              title: "추가 효과",
              desc: ["물리 방어력 +406", "마법 방어력 +404", "체력 +363"],
            },
          ],
          indentStringGroup: [
            {
              title: { val: "트라이포드 효과", active: null },
              desc: [
                { val: "[바드] [컨빅션 코어] 냉기 코어 Lv +2", active: null },
                { val: "[바드] [사운드 홀릭] 지속력 강화 Lv +1", active: null },
              ],
            },
            {
              title: { val: "맹세", active: null },
              desc: [
                { val: "맹세 (리아네 하프)", active: 0 },
                { val: "맹세 (머리 방어구)", active: 0 },
                { val: "맹세 (상의)[전설]", active: null },
                { val: "맹세 (하의)", active: 0 },
                { val: "맹세 (장갑)", active: 0 },
                { val: "맹세 (어깨 방어구)[전설]", active: null },
              ],
            },
            {
              title: { val: ["2 세트 효과", "[전설]"], active: null },
              desc: [
                {
                  val: [
                    "적을 타격 시 2초 마다 6초 동안 '달의 힘' 효과 획득",
                    " 달의 힘: 치명타 피해 6% 증가 (최대 5 중첩, '태양의 힘'과 중복 적용되지 않음)",
                  ],
                  active: null,
                },
              ],
            },
            {
              title: { val: ["5 세트 효과", "[전설]"], active: 0 },
              desc: [
                {
                  val: [
                    "'달의 힘' 5 중첩 시 '만월' 효과로 변경된다.",
                    "'만월' 효과 발동 중 결단 5세트로 발동되는 효과를 가지고 있는 파티원에게 3m 이내 접근 시 '개기 월식' 효과 획득",
                    " 만월: 15초 동안 치명타 피해 50% 증가",
                    " 개기 월식: 15초 동안 치명타 확률 25% 증가하며 치명타 피해가 50% 증가",
                  ],
                  active: 0,
                },
              ],
            },
          ],
          tripodSkillCustom: [],
        },
      },
      "003_cloth": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_equipment_slot4.png?298c62509ce611528f532b8cd05c1de4",
        type: "Equip",
        detail: {
          hover: true,
          title: "+12 선택의 하의",
          subTitle: ["전설 하의", "아이템 레벨 1400 (티어 3)"],
          quality: 69,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/SM_Item/SM_Item_01_84.png",
          grade: 4,
          itemPartBox: [
            {
              title: "기본 효과",
              desc: [
                "물리 방어력 +3792",
                "마법 방어력 +4137",
                "지능 +9032",
                "체력 +2875",
              ],
            },
            {
              title: "추가 효과",
              desc: ["물리 방어력 +503", "마법 방어력 +433", "체력 +286"],
            },
          ],
          indentStringGroup: [
            {
              title: { val: "트라이포드 효과", active: null },
              desc: [
                { val: "[바드] [수호의 연주] 강력한 수호 Lv +1", active: null },
                {
                  val: "[바드] [윈드 오브 뮤직] 수호의 바람 Lv +3",
                  active: null,
                },
                { val: "[바드] [폭풍의 서곡] 선율 증가 Lv +2", active: null },
              ],
            },
            {
              title: { val: "선택", active: null },
              desc: [
                { val: "선택 (리아네 하프)[전설]", active: null },
                { val: "선택 (머리 방어구)[전설]", active: null },
                { val: "선택 (상의)", active: 0 },
                { val: "선택 (하의)[전설]", active: null },
                { val: "선택 (장갑)[전설]", active: null },
                { val: "선택 (어깨 방어구)", active: 0 },
              ],
            },
            {
              title: { val: ["2 세트 효과", "[전설]"], active: null },
              desc: [
                {
                  val: [
                    "어비스 레이드 몬스터에게 공격 적중 시 '아르고스의 힘' 효과 획득",
                    " 아르고스의 힘: 20초 동안 적에게 주는 피해 20% 증가 (재사용 대기시간 60초)",
                  ],
                  active: null,
                },
              ],
            },
            {
              title: { val: ["5 세트 효과", "[전설]"], active: 0 },
              desc: [
                {
                  val: "가디언 등급 이하 몬스터에게 주는 피해 10% 증가",
                  active: 0,
                },
              ],
            },
          ],
          tripodSkillCustom: [],
        },
      },
      "004_pants": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_equipment_slot5.png?206f2a75948642dbd0cddc37dd8ed220",
        type: "Equip",
        detail: {
          hover: true,
          title: "+13 선택의 장갑",
          subTitle: ["전설 장갑", "아이템 레벨 1405 (티어 3)"],
          quality: 72,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/SM_Item/SM_Item_01_83.png",
          grade: 4,
          itemPartBox: [
            {
              title: "기본 효과",
              desc: [
                "물리 방어력 +2772",
                "마법 방어력 +2772",
                "지능 +13269",
                "체력 +1702",
              ],
            },
            {
              title: "추가 효과",
              desc: ["물리 방어력 +326", "마법 방어력 +352", "체력 +168"],
            },
          ],
          indentStringGroup: [
            {
              title: { val: "트라이포드 효과", active: null },
              desc: [
                { val: "[바드] [폭풍의 서곡] 빠른 준비 Lv +1", active: null },
                { val: "[바드] [사운드 홀릭] 집중 포화 Lv +1", active: null },
              ],
            },
            {
              title: { val: "선택", active: null },
              desc: [
                { val: "선택 (리아네 하프)[전설]", active: null },
                { val: "선택 (머리 방어구)[전설]", active: null },
                { val: "선택 (상의)", active: 0 },
                { val: "선택 (하의)[전설]", active: null },
                { val: "선택 (장갑)[전설]", active: null },
                { val: "선택 (어깨 방어구)", active: 0 },
              ],
            },
            {
              title: { val: ["2 세트 효과", "[전설]"], active: null },
              desc: [
                {
                  val: [
                    "어비스 레이드 몬스터에게 공격 적중 시 '아르고스의 힘' 효과 획득",
                    " 아르고스의 힘: 20초 동안 적에게 주는 피해 20% 증가 (재사용 대기시간 60초)",
                  ],
                  active: null,
                },
              ],
            },
            {
              title: { val: ["5 세트 효과", "[전설]"], active: 0 },
              desc: [
                {
                  val: "가디언 등급 이하 몬스터에게 주는 피해 10% 증가",
                  active: 0,
                },
              ],
            },
          ],
          tripodSkillCustom: [],
        },
      },
      "005_glove": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_equipment_slot6.png?aac2a45f5db714c267e1c59e52dc4286",
        type: "Equip",
        detail: {
          hover: true,
          title: "+8 냉혹한 맹세의 어깨장식",
          subTitle: ["전설 어깨 방어구", "아이템 레벨 1380 (티어 3)"],
          quality: 70,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/SM_Item/SM_Item_01_81.png",
          grade: 4,
          itemPartBox: [
            {
              title: "기본 효과",
              desc: [
                "물리 방어력 +3380",
                "마법 방어력 +3042",
                "지능 +11044",
                "체력 +2143",
              ],
            },
            {
              title: "추가 효과",
              desc: ["물리 방어력 +394", "마법 방어력 +377", "체력 +226"],
            },
          ],
          indentStringGroup: [
            {
              title: { val: "트라이포드 효과", active: null },
              desc: [
                { val: "[바드] [수호의 연주] 날렵한 시전 Lv +3", active: null },
                {
                  val: "[바드] [윈드 오브 뮤직] 빠른 준비 Lv +3",
                  active: null,
                },
              ],
            },
            {
              title: { val: "맹세", active: null },
              desc: [
                { val: "맹세 (리아네 하프)", active: 0 },
                { val: "맹세 (머리 방어구)", active: 0 },
                { val: "맹세 (상의)[전설]", active: null },
                { val: "맹세 (하의)", active: 0 },
                { val: "맹세 (장갑)", active: 0 },
                { val: "맹세 (어깨 방어구)[전설]", active: null },
              ],
            },
            {
              title: { val: ["2 세트 효과", "[전설]"], active: null },
              desc: [
                {
                  val: [
                    "적을 타격 시 2초 마다 6초 동안 '달의 힘' 효과 획득",
                    " 달의 힘: 치명타 피해 6% 증가 (최대 5 중첩, '태양의 힘'과 중복 적용되지 않음)",
                  ],
                  active: null,
                },
              ],
            },
            {
              title: { val: ["5 세트 효과", "[전설]"], active: 0 },
              desc: [
                {
                  val: [
                    "'달의 힘' 5 중첩 시 '만월' 효과로 변경된다.",
                    "'만월' 효과 발동 중 결단 5세트로 발동되는 효과를 가지고 있는 파티원에게 3m 이내 접근 시 '개기 월식' 효과 획득",
                    " 만월: 15초 동안 치명타 피해 50% 증가",
                    " 개기 월식: 15초 동안 치명타 확률 25% 증가하며 치명타 피해가 50% 증가",
                  ],
                  active: 0,
                },
              ],
            },
          ],
          tripodSkillCustom: [],
        },
      },
      "006_necklace": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_equipment_slot7.png?8fc19274483852c953d0d4d44ffed661",
        type: "Acc",
        detail: {
          hover: true,
          title: "비틀린 시간의 목걸이",
          subTitle: ["전설 목걸이", "아이템 티어 3"],
          quality: 45,
          src: "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_208.png",
          grade: 4,
          itemPartBox: [
            {
              title: "기본 효과",
              desc: ["힘 +7171", "민첩 +7171", "지능 +7171", "체력 +2322"],
            },
            { title: "추가 효과", desc: ["치명 +367", "신속 +397"] },
            {
              title: "무작위 각인 효과",
              desc: [
                "[승부사] 활성도 +3",
                "[원한] 활성도 +2",
                "[이동속도 감소] 활성도 +2",
              ],
            },
          ],
          indentStringGroup: [],
          tripodSkillCustom: [
            {
              name: "5레벨 홍염의 보석",
              desc: "[바드] 음파 진동 재사용 대기시간 10.00% 감소",
              grade: 3,
              src:
                "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_60.png",
            },
            {
              name: "6레벨 홍염의 보석",
              desc: "[바드] 천상의 연주 재사용 대기시간 12.00% 감소",
              grade: 3,
              src:
                "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_61.png",
            },
            {
              name: "5레벨 홍염의 보석",
              desc: "[바드] 수호의 연주 재사용 대기시간 10.00% 감소",
              grade: 3,
              src:
                "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_60.png",
            },
          ],
        },
      },
      "007_earing1": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_equipment_slot8.png?c3a33be4689986ee75e8a8432ee494d5",
        type: "Acc",
        detail: {
          hover: true,
          title: "빛나는 파멸자의 귀걸이",
          subTitle: ["전설 귀걸이", "아이템 티어 3"],
          quality: 10,
          src: "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_108.png",
          grade: 4,
          itemPartBox: [
            {
              title: "기본 효과",
              desc: ["힘 +5578", "민첩 +5578", "지능 +5578", "체력 +1659"],
            },
            { title: "추가 효과", desc: "치명 +203" },
            {
              title: "무작위 각인 효과",
              desc: [
                "[예리한 둔기] 활성도 +2",
                "[원한] 활성도 +2",
                "[공격속도 감소] 활성도 +2",
              ],
            },
          ],
          indentStringGroup: [],
          tripodSkillCustom: [
            { desc: "보석 장착 필요", src: null },
            { desc: "보석 장착 필요", src: null },
          ],
        },
      },
      "008_earing2": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_equipment_slot9.png?7326a4a95b92262ab12c1eb47656be34",
        type: "Acc",
        detail: {
          hover: true,
          title: "비틀린 시간의 귀걸이",
          subTitle: ["전설 귀걸이", "아이템 티어 3"],
          quality: 0,
          src: "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_108.png",
          grade: 4,
          itemPartBox: [
            {
              title: "기본 효과",
              desc: ["힘 +5578", "민첩 +5578", "지능 +5578", "체력 +1659"],
            },
            { title: "추가 효과", desc: "치명 +195" },
            {
              title: "무작위 각인 효과",
              desc: [
                "[예리한 둔기] 활성도 +3",
                "[원한] 활성도 +2",
                "[공격력 감소] 활성도 +1",
              ],
            },
          ],
          indentStringGroup: [],
          tripodSkillCustom: [
            {
              name: "7레벨 멸화의 보석",
              desc: "[바드] 사운드 홀릭 피해 21.00% 증가",
              grade: 4,
              src:
                "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_52.png",
            },
            {
              name: "7레벨 멸화의 보석",
              desc: "[바드] 음파 진동 피해 21.00% 증가",
              grade: 4,
              src:
                "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_52.png",
            },
          ],
        },
      },
      "009_ring1": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_equipment_slot10.png?aafc9248b55a32207e593b0f084905d2",
        type: "Acc",
        detail: {
          hover: true,
          title: "빛나는 구도자의 반지",
          subTitle: ["전설 반지", "아이템 티어 3"],
          quality: 70,
          src: "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_15.png",
          grade: 4,
          itemPartBox: [
            {
              title: "기본 효과",
              desc: ["힘 +5179", "민첩 +5179", "지능 +5179", "체력 +1327"],
            },
            { title: "추가 효과", desc: "치명 +165" },
            {
              title: "무작위 각인 효과",
              desc: [
                "[예리한 둔기] 활성도 +2",
                "[원한] 활성도 +3",
                "[공격력 감소] 활성도 +3",
              ],
            },
            { title: "추가 각인 효과", desc: "[진실된 용맹] 활성도 +9" },
          ],
          indentStringGroup: [],
          tripodSkillCustom: [
            { desc: "보석 장착 필요", src: null },
            { desc: "보석 장착 필요", src: null },
          ],
        },
      },
      "010_ring2": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_equipment_slot11.png?ef291130164ed57acf5a308a3d89b898",
        type: "Acc",
        detail: {
          hover: true,
          title: "비틀린 시간의 반지",
          subTitle: ["전설 반지", "아이템 티어 3"],
          quality: 62,
          src: "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_15.png",
          grade: 4,
          itemPartBox: [
            {
              title: "기본 효과",
              desc: ["힘 +5179", "민첩 +5179", "지능 +5179", "체력 +1327"],
            },
            { title: "추가 효과", desc: "치명 +161" },
            {
              title: "무작위 각인 효과",
              desc: [
                "[예리한 둔기] 활성도 +2",
                "[원한] 활성도 +2",
                "[공격속도 감소] 활성도 +2",
              ],
            },
            { title: "추가 각인 효과", desc: "[진실된 용맹] 활성도 +9" },
          ],
          indentStringGroup: [],
          tripodSkillCustom: [
            { desc: "보석 장착 필요", src: null },
            { desc: "보석 장착 필요", src: null },
          ],
        },
      },
      "011_stone": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_equipment_slot12.png?152c1781684a979cc20a505b8af89cb3",
        type: "Stone",
        detail: {
          hover: true,
          title: "강력한 비상의 돌",
          subTitle: ["전설 어빌리티 스톤", "아이템 티어 3"],
          quality: -1,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Ability/Ability_20.png",
          grade: 4,
          itemPartBox: [
            { title: "기본 효과", desc: "체력 +12439" },
            {
              title: "무작위 각인 효과",
              desc: [
                "[예리한 둔기] 활성도 +6",
                "[원한] 활성도 +5",
                "[방어력 감소] 활성도 +5",
              ],
            },
          ],
          indentStringGroup: [],
          tripodSkillCustom: [],
        },
      },
      "012_av_weapon": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_avatar_slot1.png?9aa3bac1ce5aaa477bd3f829e5833d9f",
        type: "InnerAv",
        detail: {
          hover: true,
          title: "노래하는 가을의 리아네 하프",
          subTitle: ["전설 리아네 하프 아바타", "아이템 레벨 -"],
          quality: -1,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Shop_icon/Shop_icon_2367.png",
          grade: 4,
          itemPartBox: [{ title: "기본 효과", desc: "지능 +2.00%" }],
          indentStringGroup: [],
          tripodSkillCustom: [],
        },
      },
      "013_av_head": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_avatar_slot3.png?27b016892d9a32cc5b8af5db3b179aa8",
        type: "InnerAv",
        detail: {
          hover: true,
          title: "붉은 장미의 무희 머리",
          subTitle: ["영웅 머리 아바타", "아이템 레벨 -"],
          quality: -1,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Shop_icon/Shop_icon_178.png",
          grade: 3,
          itemPartBox: [{ title: "기본 효과", desc: "지능 +1.00%" }],
          indentStringGroup: [],
          tripodSkillCustom: [],
        },
      },
      "014_av_cloth": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_avatar_slot6.png?edbe15fe183c44e05013953d0cdf4b7b",
        type: "InnerAv",
        detail: {
          hover: true,
          title: "노래하는 가을의 귀족 상의",
          subTitle: ["전설 상의 아바타", "아이템 레벨 -"],
          quality: -1,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Shop_icon/Shop_icon_2364.png",
          grade: 4,
          itemPartBox: [{ title: "기본 효과", desc: "지능 +2.00%" }],
          indentStringGroup: [],
          tripodSkillCustom: [],
        },
      },
      "015_av_pants": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_avatar_slot6.png?edbe15fe183c44e05013953d0cdf4b7b",
        type: "InnerAv",
        detail: {
          hover: true,
          title: "노래하는 가을의 귀족 하의",
          subTitle: ["전설 하의 아바타", "아이템 레벨 -"],
          quality: -1,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Shop_icon/Shop_icon_2365.png",
          grade: 4,
          itemPartBox: [{ title: "기본 효과", desc: "지능 +2.00%" }],
          indentStringGroup: [],
          tripodSkillCustom: [],
        },
      },
      "016_av_inst": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_avatar_slot2.png?c29dbbf56163365571c4cbcf6804336a",
        type: "InnerAv",
      },
      "017_av_face1": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_avatar_slot4.png?620d5ebcc169ff61c4fc2411d0f5af35",
        type: "InnerAv",
        detail: {
          hover: true,
          title: "고고한 달무리 낭자 얼굴1",
          subTitle: ["영웅 얼굴1 아바타", "아이템 레벨 -"],
          quality: -1,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Shop_icon/Shop_icon_3482.png",
          grade: 3,
          itemPartBox: [],
          indentStringGroup: [],
          tripodSkillCustom: [],
        },
      },
      "018_av_face2": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_avatar_slot5.png?88e22b7033cc6dae4325f4f68673be00",
        type: "InnerAv",
        detail: {
          hover: true,
          title: "푸른 나비의 여신 얼굴2",
          subTitle: ["영웅 얼굴2 아바타", "아이템 레벨 -"],
          quality: -1,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Shop_icon/Shop_icon_3143.png",
          grade: 3,
          itemPartBox: [],
          indentStringGroup: [],
          tripodSkillCustom: [],
        },
      },
      "019_av_in_weapon": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_avatar_slot1.png?9aa3bac1ce5aaa477bd3f829e5833d9f",
        type: "OuterAv",
      },
      "020_av_in_head": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_avatar_slot3.png?27b016892d9a32cc5b8af5db3b179aa8",
        type: "OuterAv",
      },
      "021_av_in_cloth": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_avatar_slot6.png?edbe15fe183c44e05013953d0cdf4b7b",
        type: "OuterAv",
        detail: {
          hover: true,
          title: "여름빛 바람 상의",
          subTitle: ["영웅 상의 아바타", "아이템 레벨 -"],
          quality: -1,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Shop_icon/shop_icon_1821.png",
          grade: 3,
          itemPartBox: [{ title: "기본 효과", desc: "지능 +1.00%" }],
          indentStringGroup: [],
          tripodSkillCustom: [],
        },
      },
      "022_av_in_pants": {
        backSrc:
          "//cdn-lostark.game.onstove.com//2018/obt/assets/images/common/game/bg_avatar_slot6.png?edbe15fe183c44e05013953d0cdf4b7b",
        type: "OuterAv",
        detail: {
          hover: true,
          title: "우아한 노을 낭자 하의",
          subTitle: ["영웅 하의 아바타", "아이템 레벨 -"],
          quality: -1,
          src:
            "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Shop_icon/Shop_icon_3473.png",
          grade: 3,
          itemPartBox: [{ title: "기본 효과", desc: "지능 +1.00%" }],
          indentStringGroup: [],
          tripodSkillCustom: [],
        },
      },
    },
    characteristicInfo: {
      basic: {
        title: "기본 특성",
        content: [
          {
            title: ["공격력", "18858"],
            desc:
              "적에게 주는 피해를 계산할 때 기준이 되는 값입니다.\n                          힘, 민첩, 지능과 무기 공격력을 기반으로 증가한 기본 공격력은 18858 입니다.\n                          공격력 증감 효과로 공격력이 0 증가되었습니다.\n            \n        ",
          },
          {
            title: ["최대 생명력", "69266"],
            desc:
              "캐릭터의 최대 생명력을 나타냅니다.\n                          체력으로 최대 생명력이 69266 증가되었습니다.\n                          생명 활성력으로 최대 생명력이 0.00% 증가되었습니다.\n            \n        ",
          },
        ],
      },
      battle: {
        title: "전투 특성",
        content: [
          {
            title: ["치명", "1130"],
            desc:
              "치명타 적중률이 40.44% 증가합니다.\n                          물약 효과로 20만큼 영구적으로 증가되었습니다.\n            \n        ",
          },
          {
            title: ["특화", "37"],
            desc:
              "구원의 세레나데 스킬의 회복량이 1.05% 증가합니다.\n                          파티원에게 적용되는 용맹의 세레나데 스킬의 버프 효율이 1.85% 증가합니다.\n                          세레나데 게이지 획득량이 1.48% 증가합니다.\n                          각성 스킬의 피해량이 2.02% 증가합니다.\n                          물약 효과로 24만큼 영구적으로 증가되었습니다.\n            \n        ",
          },
          {
            title: ["제압", "38"],
            desc:
              "피격이상 및 상태이상 대상에게 주는 피해량이 2.33% 증가합니다.\n                          무력화 대상에게 주는 피해량이  증가합니다.\n                          물약 효과로 24만큼 영구적으로 증가되었습니다.\n            \n        ",
          },
          {
            title: ["신속", "435"],
            desc:
              "공격 속도가 7.47% 증가합니다.\n                          이동 속도가 7.47% 증가합니다.\n                          스킬 재사용 대기시간이 9.34% 감소합니다.\n                          물약 효과로 24만큼 영구적으로 증가되었습니다.\n            \n        ",
          },
          {
            title: ["인내", "21"],
            desc:
              "물리 방어력이 1.71% 증가합니다.\n                          마법 방어력이 1.71% 증가합니다.\n                          보호막 효과가 0.53% 증가합니다.\n                          생명력 회복 효과가 0.75% 증가합니다.\n                          물약 효과로 16만큼 영구적으로 증가되었습니다.\n            \n        ",
          },
          {
            title: ["숙련", "41"],
            desc:
              "상태이상 공격 지속시간이 1.76% 증가합니다.\n                          상태이상 피해 지속시간이 1.46% 감소합니다.\n                          무력화 피해량이 1.17% 증가합니다.\n                          물약 효과로 24만큼 영구적으로 증가되었습니다.\n            \n        ",
          },
        ],
      },
      tendency: { title: "성향", content: [{ title: [], desc: null }] },
      engrave: {
        title: "각인 효과",
        content: [
          {
            title: ["진실된 용맹 Lv. 3"],
            desc:
              "용맹의 세레나데 사용 시 자신이 적에게 주는 피해량이 추가로 15% 증가하고, 치명타 적중률이 10% 증가한다.\n                        ",
          },
          {
            title: ["원한 Lv. 3"],
            desc:
              "보스 등급 이상 몬스터에게 주는 피해가 20% 증가하지만, 받는 피해가 20% 증가한다.\n                        ",
          },
          {
            title: ["예리한 둔기 Lv. 3"],
            desc:
              "치명타 피해량이 50% 증가하지만, 공격 시 일정 확률로 20% 감소된 피해를 준다.\n                        ",
          },
          {
            title: ["방어력 감소 Lv. 1"],
            desc: "방어력이 5% 감소한다.\n                        ",
          },
        ],
      },
    },
  },
  skillInfo: {
    battleSkill: {
      usePoint: "378",
      getPoint: "384",
      skills: [
        {
          type: "Left",
          backSrc:
            "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BD_Skill/BD_Skill_01_11.png",
          detail: {
            title: "Lv11 사운드 홀릭 ",
            subTitle: ["일반"],
            hover: true,
            tripodSkillCustom: [
              {
                name: "사운드 집중",
                desc:
                  "매 판정마다 적에게 주는 피해가 8.0% 씩 증가하여 최대 48.0%까지 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_1_58.png",
              },
              {
                name: "지속력 강화",
                desc:
                  "지속 시간이 1.5초 증가하여 판정횟수가 5회 증가하지만, 재사용 대기시간이 2.3초 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_2_42.png",
              },
              {
                name: "집중 포화",
                desc:
                  "방향전환이 불가능해지며, 지속 시간이 50.0% 감소하여 판정횟수가 5회로 줄어들지만 각 공격이 적에게 주는 피해가 740.0% 증가한다. 지속력 강화 트라이포드 적용시, 판정횟수가 7회로 감소한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_3_40.png",
              },
            ],
            rune: {
              runeInfo: ["스킬 시전 속도가 12% 증가"],
              runeImg:
                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_7_194.png",
              runeGrade: "영웅 스킬 룬",
            },
          },
        },
        {
          type: "Left",
          backSrc:
            "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BD_Skill/BD_Skill_01_1.png",
          detail: {
            title: "Lv10 사운드 쇼크 ",
            subTitle: ["일반"],
            hover: true,
            tripodSkillCustom: [
              {
                name: "폭파 유지",
                desc:
                  "사운드 쇼크가 소멸되는 위치에 잔해가 남아 2.0초간 적들에게 30.0%의 추가 피해를 준다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_1_8.png",
              },
              {
                name: "성스러운 쇼크",
                desc:
                  "[성] 속성으로 변경되고, 사운드 쇼크에 적중된 적에게 2.0초간 음표 낙인이 생겨 자신 및 파티원이 주는 피해가 10.0% 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_2_18.png",
              },
              {
                name: "연사",
                desc: "사운드 쇼크를 연속으로 2회 발사한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_3_54.png",
              },
            ],
            rune: {
              runeInfo: [
                "스킬 사용 시 일정 확률로 전체 재사용 대기 시간이 12% 감소",
              ],
              runeImg:
                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_7_196.png",
              runeGrade: "영웅 스킬 룬",
            },
          },
        },
        {
          type: "Left",
          backSrc:
            "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BD_Skill/BD_Skill_01_5.png",
          detail: {
            title: "Lv10 불협화음 ",
            subTitle: ["지점"],
            hover: true,
            tripodSkillCustom: [
              {
                name: "선율 증가",
                desc: "적중 시 획득하는 세레나데 게이지가 30.0% 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_1_64.png",
              },
              {
                name: "무기력한 화음",
                desc:
                  "적중 시 적의 공격력이 2.0초간 6.0%씩 최대 30.0% 감소한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_2_46.png",
              },
              {
                name: "화음 강화",
                desc: "적에게 주는 피해가 100.0% 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_3_1.png",
              },
            ],
            rune: {
              runeInfo: ["스킬 적중 시 아이덴티티 게이지 획득량 40% 증가"],
              runeImg:
                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_7_204.png",
              runeGrade: "전설 스킬 룬",
            },
          },
        },
        {
          type: "Left",
          backSrc:
            "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BD_Skill/BD_Skill_01_8.png",
          detail: {
            title: "Lv10 스티그마 ",
            subTitle: ["캐스팅"],
            hover: true,
            tripodSkillCustom: [
              {
                name: "지속력 강화",
                desc:
                  "스티그마의 지속시간이 2초 증가하고, 판정횟수가 2회 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_1_51.png",
              },
              {
                name: "광휘의 낙인",
                desc:
                  "[성] 속성으로 변경되고, 2.0초간 음표 낙인이 생겨 자신 및 파티원이 주는 피해가 10.0% 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_2_18.png",
              },
              {
                name: "고통의 낙인",
                desc: "피해 증가 수치가 12.5%에서 60.0%로 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_3_53.png",
              },
            ],
            rune: {
              runeInfo: [
                "스킬 적중 시 30% 확률로 자신에게 3초간 지속되는 '단죄' 상태 부여하며 해당 상태 일 때 '심판' 을 통해 추가 효과를 발동",
              ],
              runeImg:
                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_7_198.png",
              runeGrade: "영웅 스킬 룬",
            },
          },
        },
        {
          type: "Left",
          backSrc:
            "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BD_Skill/BD_Skill_01_13.png",
          detail: {
            title: "Lv10 음파 진동 ",
            subTitle: ["지점"],
            hover: true,
            tripodSkillCustom: [
              {
                name: "강인함",
                desc: "음파 진동 사용 중 피격이상에 면역이 된다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_1_23.png",
              },
              {
                name: "연쇄 진동",
                desc:
                  "더 이상 잔류물이 생성되지 않지만, 음표가 다시 한번 공중으로 떠 올라 한번 더 내려찍는 공격을 하고, 부위파괴를 한번 더 적용한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_2_81.png",
              },
              {
                name: "진동 확산",
                desc:
                  "음파가 지면에 충돌 또는 폭발 시, X자 방향으로 음파가 10.0m 날아가 적에게 기본 피해량의  60.0% 피해를 추가로 준다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_3_54.png",
              },
            ],
            rune: {
              runeInfo: [
                "스킬 적중 시 30% 확률로 자신의 '단죄' 상태를 제거하여 6초간 전투자원 회복량 증가 및 스킬 재사용 대기시간 감소",
              ],
              runeImg:
                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_7_201.png",
              runeGrade: "영웅 스킬 룬",
            },
          },
        },
        {
          type: "Right",
          backSrc:
            "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BD_Skill/BD_Skill_01_12.png",
          detail: {
            title: "Lv10 천상의 연주 ",
            subTitle: ["일반"],
            hover: true,
            tripodSkillCustom: [
              {
                name: "날렵한 시전",
                desc: "스킬 시전 속도가 25.0% 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_1_41.png",
              },
              {
                name: "강인한 연주",
                desc: "공격속도가 추가로 8.0% 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_2_65.png",
              },
              {
                name: "격렬한 연주",
                desc:
                  "기존 효과에 추가로 자신 및 파티원의 공격력에 버프 시전자의 기본 공격력의 15.0%만큼 더해지며, 전체 공격력이 6.0% 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_3_1.png",
              },
            ],
            rune: {
              runeInfo: ["스킬 시전 속도가 12% 증가"],
              runeImg:
                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_7_194.png",
              runeGrade: "영웅 스킬 룬",
            },
          },
        },
        {
          type: "Right",
          backSrc:
            "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BD_Skill/BD_Skill_01_18.png",
          detail: {
            title: "Lv10 율동의 하프 ",
            subTitle: ["일반"],
            hover: true,
            tripodSkillCustom: [
              {
                name: "소환의 의지",
                desc: "하프의 유지 시간이 2.0초 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_1_51.png",
              },
              {
                name: "날렵한 연사",
                desc: "하프의 공격속도가 60.0% 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_2_6.png",
              },
              {
                name: "거대 하프",
                desc:
                  "크기가 20.0% 커지고 주는 피해가 100.0% 증가한 하프를 소환한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_3_39.png",
              },
            ],
            rune: {
              runeInfo: ["스킬 적중 시 적을 6초간 '출혈' 상태로 만듦"],
              runeImg:
                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_7_206.png",
              runeGrade: "전설 스킬 룬",
            },
          },
        },
        {
          type: "Right",
          backSrc:
            "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BD_Skill/BD_Skill_01_9.png",
          detail: {
            title: "Lv9 리듬 벅샷 ",
            subTitle: ["일반"],
            hover: true,
            tripodSkillCustom: [
              {
                name: "선율 증가",
                desc: "적중 시 회복하는 세레나데 게이지가 30.0% 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_1_64.png",
              },
              {
                name: "샷 강화",
                desc: "넘어뜨리는 시간이 증가하고 주는 피해가 25.0% 증가한다.",
                grade: 8,
                src:
                  "//cdn-lostark.game.onstove.com/EFUI_IconAtlas/Tripod_Tier/Tripod_Tier_2_9.png",
              },
              { desc: "티어 3 트라이포드 스킬 레벨 10에 개방", src: null },
            ],
            rune: {
              runeInfo: [
                "스킬 사용 시 일정 확률로 전체 재사용 대기 시간이 8% 감소",
              ],
              runeImg:
                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_7_196.png",
              runeGrade: "희귀 스킬 룬",
            },
          },
        },
        {
          type: "Right",
          backSrc:
            "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BD_Skill/BD_Skill_01_23.png",
          detail: {
            title: "Lv각성기 심포니아 ",
            subTitle: ["일반"],
            hover: true,
            tripodSkillCustom: [],
            rune: null,
          },
        },
        {
          type: "Right",
          backSrc:
            "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BD_Skill/BD_Skill_01_25.png",
          detail: {
            title: "Lv각성기 오라토리오 ",
            subTitle: ["일반"],
            hover: true,
            tripodSkillCustom: [],
            rune: null,
          },
        },
      ],
    },
    lifeSkill: [
      {
        type: "Left",
        backSrc: "/loa-hands/img/lifeskill/0.PNG",
        detail: { title: "식물 채집", subTitle: ["Lv.38"] },
      },
      {
        type: "Left",
        backSrc: "/loa-hands/img/lifeskill/1.PNG",
        detail: { title: "벌목", subTitle: ["Lv.47"] },
      },
      {
        type: "Left",
        backSrc: "/loa-hands/img/lifeskill/2.PNG",
        detail: { title: "채광", subTitle: ["Lv.49"] },
      },
      {
        type: "Right",
        backSrc: "/loa-hands/img/lifeskill/3.PNG",
        detail: { title: "수렵", subTitle: ["Lv.34"] },
      },
      {
        type: "Right",
        backSrc: "/loa-hands/img/lifeskill/4.PNG",
        detail: { title: "낚시", subTitle: ["Lv.35"] },
      },
      {
        type: "Right",
        backSrc: "/loa-hands/img/lifeskill/5.PNG",
        detail: { title: "고고학", subTitle: ["Lv.24"] },
      },
    ],
  },
  collectionInfo: {
    collectionMini: [
      { name: "섬의 마음", size: "91" },
      { name: "오르페우스의 별", size: "5" },
      { name: "거인의 심장", size: "15" },
      { name: "위대한 미술품", size: "40" },
      { name: "모코코 씨앗", size: "1,210" },
      { name: "항해 모험물", size: "40" },
      { name: "이그네아의 징표", size: "12" },
      { name: "세계수의 잎", size: "16" },
    ],
    collectionDetail: [
      {
        title: "섬의 마음 획득 현황",
        getCount: "91",
        totalCount: "93",
        collection: [
          {
            type: "True",
            detail: { subTitle: ["#1"], title: "고블린 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#2"], title: "거대버섯 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#3"], title: "토토실버 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#4"], title: "토토피아 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#5"], title: "환각의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#6"], title: "잠자는 노래의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#7"], title: "별빛 등대 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#8"], title: "세월의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#9"], title: "볼라르 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#10"], title: "두키 섬의 마음" },
          },
          {
            type: "False",
            detail: { subTitle: ["#11"], title: "갈망의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#12"], title: "비밀기지 X-301 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#13"], title: "알트아이젠 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#14"], title: "칼트헤르츠 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#15"], title: "안개의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#16"], title: "얼음 미로의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#17"], title: "얼음과 불의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#18"], title: "비키니 아일랜드 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#19"], title: "그림자의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#20"], title: "포르투나 섬의 마음" },
          },
          {
            type: "False",
            detail: { subTitle: ["#21"], title: "에버그레이스 둥지 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#22"], title: "스피다 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#23"], title: "회상의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#24"], title: "포르페 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#25"], title: "페이토 섬의 마음" },
          },
          {
            type: "True",
            detail: {
              subTitle: ["#26"],
              title: "잊혀진 자들의 도시 섬의 마음",
            },
          },
          {
            type: "True",
            detail: { subTitle: ["#27"], title: "검은이빨 주둔지 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#28"], title: "휴양지 그라비스 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#29"], title: "외로운 섬 오페르 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#30"], title: "해바라기 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#31"], title: "자유의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#32"], title: "카마인의 주둔지 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#33"], title: "죽음의 협곡 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#34"], title: "작은 행운의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#35"], title: "왜곡된 차원의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#36"], title: "에라스모의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#37"], title: "포모나 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#38"], title: "도망자들의 마을 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#39"], title: "메데이아 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#40"], title: "리베하임 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#41"], title: "우거진 갈대의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#42"], title: "메투스 제도 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#43"], title: "해적마을 아틀라스 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#44"], title: "지혜의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#45"], title: "신월의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#46"], title: "고요의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#47"], title: "하얀파도 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#48"], title: "무법자의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#49"], title: "격류의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#50"], title: "나루니 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#51"], title: "노토스 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#52"], title: "몬테 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#53"], title: "판다 푸푸 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#54"], title: "몽환의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#55"], title: "하모니 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#56"], title: "꿈꾸는 갈매기 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#57"], title: "부서진 빙하의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#58"], title: "블루홀 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#59"], title: "거북 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#60"], title: "희망의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#61"], title: "로팡 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#62"], title: "고립된 영원의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#63"], title: "히프노스의 눈 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#64"], title: "지고의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#65"], title: "그릇된 욕망의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#66"], title: "오르비스 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#67"], title: "에스텔라 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#68"], title: "슬라임 아일랜드 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#69"], title: "알라케르 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#70"], title: "기회의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#71"], title: "황금물결 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#72"], title: "고요한 안식의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#73"], title: "클럽 아비뉴 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#74"], title: "수라도 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#75"], title: "기약의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#76"], title: "황혼의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#77"], title: "아르곤 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#78"], title: "환영 나비 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#79"], title: "푸른 바람의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#80"], title: "무릉도원 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#81"], title: "아트로포스 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#82"], title: "발푸르기스 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#83"], title: "미지의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#84"], title: "그림자달 시장 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#85"], title: "페르마타 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#86"], title: "지스브로이 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#87"], title: "두키 주식회사 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#88"], title: "속삭이는 작은 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#89"], title: "비탄의 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#90"], title: "환죽도 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#91"], title: "쿵덕쿵 아일랜드 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#92"], title: "이스테르 섬의 마음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#93"], title: "스노우팡 아일랜드 섬의 마음" },
          },
        ],
      },
      {
        title: "오르페우스의 별 획득 현황",
        getCount: "5",
        totalCount: "7",
        collection: [
          {
            type: "True",
            detail: { subTitle: ["#1"], title: "오르페우스의 별 #1" },
          },
          {
            type: "True",
            detail: { subTitle: ["#2"], title: "오르페우스의 별 #2" },
          },
          {
            type: "True",
            detail: { subTitle: ["#3"], title: "오르페우스의 별 #3" },
          },
          {
            type: "True",
            detail: { subTitle: ["#4"], title: "오르페우스의 별 #4" },
          },
          {
            type: "False",
            detail: { subTitle: ["#5"], title: "오르페우스의 별 #5" },
          },
          {
            type: "True",
            detail: { subTitle: ["#6"], title: "오르페우스의 별 #6" },
          },
          {
            type: "False",
            detail: { subTitle: ["#7"], title: "오르페우스의 별 #7" },
          },
        ],
      },
      {
        title: "거인의 심장 획득 현황",
        getCount: "15",
        totalCount: "15",
        collection: [
          {
            type: "True",
            detail: { subTitle: ["#1"], title: "첫 번째 거인의 심장" },
          },
          {
            type: "True",
            detail: { subTitle: ["#2"], title: "두 번째 거인의 심장" },
          },
          {
            type: "True",
            detail: { subTitle: ["#3"], title: "세 번째 거인의 심장" },
          },
          {
            type: "True",
            detail: { subTitle: ["#4"], title: "네 번째 거인의 심장" },
          },
          {
            type: "True",
            detail: { subTitle: ["#5"], title: "다섯 번째 거인의 심장" },
          },
          {
            type: "True",
            detail: { subTitle: ["#6"], title: "여섯 번째 거인의 심장" },
          },
          {
            type: "True",
            detail: { subTitle: ["#7"], title: "일곱 번째 거인의 심장" },
          },
          {
            type: "True",
            detail: { subTitle: ["#8"], title: "여덟 번째 거인의 심장" },
          },
          {
            type: "True",
            detail: { subTitle: ["#9"], title: "아홉 번째 거인의 심장" },
          },
          {
            type: "True",
            detail: { subTitle: ["#10"], title: "열 번째 거인의 심장" },
          },
          {
            type: "True",
            detail: { subTitle: ["#11"], title: "열한 번째 거인의 심장" },
          },
          {
            type: "True",
            detail: { subTitle: ["#12"], title: "열두 번째 거인의 심장" },
          },
          {
            type: "True",
            detail: { subTitle: ["#13"], title: "열세 번째 거인의 심장" },
          },
          {
            type: "True",
            detail: { subTitle: ["#14"], title: "열네 번째 거인의 심장" },
          },
          {
            type: "True",
            detail: { subTitle: ["#15"], title: "열다섯 번째 거인의 심장" },
          },
        ],
      },
      {
        title: "위대한 미술품 획득 현황",
        getCount: "40",
        totalCount: "51",
        collection: [
          {
            type: "True",
            detail: { subTitle: ["#1"], title: "위대한 미술품 #1" },
          },
          {
            type: "True",
            detail: { subTitle: ["#2"], title: "위대한 미술품 #2" },
          },
          {
            type: "True",
            detail: { subTitle: ["#3"], title: "위대한 미술품 #3" },
          },
          {
            type: "True",
            detail: { subTitle: ["#4"], title: "위대한 미술품 #4" },
          },
          {
            type: "True",
            detail: { subTitle: ["#5"], title: "위대한 미술품 #5" },
          },
          {
            type: "True",
            detail: { subTitle: ["#6"], title: "위대한 미술품 #6" },
          },
          {
            type: "True",
            detail: { subTitle: ["#7"], title: "위대한 미술품 #7" },
          },
          {
            type: "True",
            detail: { subTitle: ["#8"], title: "위대한 미술품 #8" },
          },
          {
            type: "True",
            detail: { subTitle: ["#9"], title: "위대한 미술품 #9" },
          },
          {
            type: "True",
            detail: { subTitle: ["#10"], title: "위대한 미술품 #10" },
          },
          {
            type: "False",
            detail: { subTitle: ["#11"], title: "위대한 미술품 #11" },
          },
          {
            type: "True",
            detail: { subTitle: ["#12"], title: "위대한 미술품 #12" },
          },
          {
            type: "True",
            detail: { subTitle: ["#13"], title: "위대한 미술품 #13" },
          },
          {
            type: "False",
            detail: { subTitle: ["#14"], title: "위대한 미술품 #14" },
          },
          {
            type: "True",
            detail: { subTitle: ["#15"], title: "위대한 미술품 #15" },
          },
          {
            type: "False",
            detail: { subTitle: ["#16"], title: "위대한 미술품 #16" },
          },
          {
            type: "True",
            detail: { subTitle: ["#17"], title: "위대한 미술품 #17" },
          },
          {
            type: "True",
            detail: { subTitle: ["#18"], title: "위대한 미술품 #18" },
          },
          {
            type: "True",
            detail: { subTitle: ["#19"], title: "위대한 미술품 #19" },
          },
          {
            type: "True",
            detail: { subTitle: ["#20"], title: "위대한 미술품 #20" },
          },
          {
            type: "True",
            detail: { subTitle: ["#21"], title: "위대한 미술품 #21" },
          },
          {
            type: "True",
            detail: { subTitle: ["#22"], title: "위대한 미술품 #22" },
          },
          {
            type: "True",
            detail: { subTitle: ["#23"], title: "위대한 미술품 #23" },
          },
          {
            type: "True",
            detail: { subTitle: ["#24"], title: "위대한 미술품 #24" },
          },
          {
            type: "False",
            detail: { subTitle: ["#25"], title: "위대한 미술품 #25" },
          },
          {
            type: "False",
            detail: { subTitle: ["#26"], title: "위대한 미술품 #26" },
          },
          {
            type: "True",
            detail: { subTitle: ["#27"], title: "위대한 미술품 #27" },
          },
          {
            type: "True",
            detail: { subTitle: ["#28"], title: "위대한 미술품 #28" },
          },
          {
            type: "True",
            detail: { subTitle: ["#29"], title: "위대한 미술품 #29" },
          },
          {
            type: "True",
            detail: { subTitle: ["#30"], title: "위대한 미술품 #30" },
          },
          {
            type: "True",
            detail: { subTitle: ["#31"], title: "위대한 미술품 #31" },
          },
          {
            type: "True",
            detail: { subTitle: ["#32"], title: "위대한 미술품 #32" },
          },
          {
            type: "True",
            detail: { subTitle: ["#33"], title: "위대한 미술품 #33" },
          },
          {
            type: "True",
            detail: { subTitle: ["#34"], title: "위대한 미술품 #34" },
          },
          {
            type: "False",
            detail: { subTitle: ["#35"], title: "위대한 미술품 #35" },
          },
          {
            type: "True",
            detail: { subTitle: ["#36"], title: "위대한 미술품 #36" },
          },
          {
            type: "True",
            detail: { subTitle: ["#37"], title: "위대한 미술품 #37" },
          },
          {
            type: "True",
            detail: { subTitle: ["#38"], title: "위대한 미술품 #38" },
          },
          {
            type: "True",
            detail: { subTitle: ["#39"], title: "위대한 미술품 #39" },
          },
          {
            type: "True",
            detail: { subTitle: ["#40"], title: "위대한 미술품 #40" },
          },
          {
            type: "True",
            detail: { subTitle: ["#41"], title: "위대한 미술품 #41" },
          },
          {
            type: "True",
            detail: { subTitle: ["#42"], title: "위대한 미술품 #42" },
          },
          {
            type: "True",
            detail: { subTitle: ["#43"], title: "위대한 미술품 #43" },
          },
          {
            type: "True",
            detail: { subTitle: ["#44"], title: "위대한 미술품 #44" },
          },
          {
            type: "False",
            detail: { subTitle: ["#45"], title: "위대한 미술품 #45" },
          },
          {
            type: "False",
            detail: { subTitle: ["#46"], title: "위대한 미술품 #46" },
          },
          {
            type: "False",
            detail: { subTitle: ["#47"], title: "위대한 미술품 #47" },
          },
          {
            type: "True",
            detail: { subTitle: ["#48"], title: "위대한 미술품 #48" },
          },
          {
            type: "False",
            detail: { subTitle: ["#49"], title: "위대한 미술품 #49" },
          },
          {
            type: "True",
            detail: { subTitle: ["#50"], title: "위대한 미술품 #50" },
          },
          {
            type: "False",
            detail: { subTitle: ["#51"], title: "위대한 미술품 #51" },
          },
        ],
      },
      {
        title: "모코코 씨앗 획득 현황",
        getCount: "1,210",
        totalCount: "1,235",
        collection: [
          {
            type: "True",
            detail: { subTitle: ["#1"], title: "아르테미스 51 / 51" },
          },
          {
            type: "True",
            detail: { subTitle: ["#2"], title: "유디아 37 / 37" },
          },
          {
            type: "True",
            detail: { subTitle: ["#3"], title: "루테란 서부 71 / 71" },
          },
          {
            type: "True",
            detail: { subTitle: ["#4"], title: "루테란 동부 127 / 127" },
          },
          {
            type: "True",
            detail: { subTitle: ["#5"], title: "애니츠 72 / 72" },
          },
          {
            type: "True",
            detail: { subTitle: ["#6"], title: "아르데타인 87 / 87" },
          },
          {
            type: "True",
            detail: { subTitle: ["#7"], title: "베른 북부 83 / 83" },
          },
          {
            type: "True",
            detail: { subTitle: ["#8"], title: "슈샤이어 57 / 57" },
          },
          {
            type: "True",
            detail: { subTitle: ["#9"], title: "로헨델 70 / 70" },
          },
          { type: "True", detail: { subTitle: ["#10"], title: "욘 70 / 70" } },
          {
            type: "True",
            detail: { subTitle: ["#11"], title: "페이튼 70 / 70" },
          },
          {
            type: "True",
            detail: { subTitle: ["#12"], title: "파푸니카 70 / 70" },
          },
          {
            type: "False",
            detail: { subTitle: ["#13"], title: "베른 남부 0 / 25" },
          },
          {
            type: "True",
            detail: { subTitle: ["#14"], title: "대항해 345 / 345" },
          },
        ],
      },
      {
        title: "항해 모험물 획득 현황",
        getCount: "40",
        totalCount: "46",
        collection: [
          {
            type: "True",
            detail: { subTitle: ["#1"], title: "모험물 : 모코코 버섯" },
          },
          {
            type: "True",
            detail: { subTitle: ["#2"], title: "모험물 : 라마" },
          },
          {
            type: "True",
            detail: { subTitle: ["#3"], title: "모험물 : 붉은바다거북" },
          },
          {
            type: "True",
            detail: { subTitle: ["#4"], title: "모험물 : 스타더스트" },
          },
          {
            type: "True",
            detail: { subTitle: ["#5"], title: "모험물 : 바다꽃" },
          },
          {
            type: "True",
            detail: { subTitle: ["#6"], title: "모험물 : 스타후르츠" },
          },
          {
            type: "True",
            detail: { subTitle: ["#7"], title: "모험물 : 용과" },
          },
          {
            type: "True",
            detail: { subTitle: ["#8"], title: "모험물 : 맨드릴" },
          },
          {
            type: "True",
            detail: { subTitle: ["#9"], title: "모험물 : 유령 도마뱀" },
          },
          {
            type: "True",
            detail: { subTitle: ["#10"], title: "모험물 : 오색앵무새" },
          },
          {
            type: "True",
            detail: { subTitle: ["#11"], title: "모험물 : 바람의 석판" },
          },
          {
            type: "True",
            detail: { subTitle: ["#12"], title: "모험물 : 반달 가면" },
          },
          {
            type: "True",
            detail: { subTitle: ["#13"], title: "모험물 : 고대 지팡이" },
          },
          {
            type: "True",
            detail: { subTitle: ["#14"], title: "모험물 : 고대 금화" },
          },
          {
            type: "True",
            detail: { subTitle: ["#15"], title: "모험물 : 잊혀진 호수" },
          },
          {
            type: "True",
            detail: { subTitle: ["#16"], title: "모험물 : 크래바스" },
          },
          {
            type: "True",
            detail: { subTitle: ["#17"], title: "모험물 : 불타는 얼음" },
          },
          {
            type: "True",
            detail: { subTitle: ["#18"], title: "모험물 : 고인돌" },
          },
          {
            type: "True",
            detail: { subTitle: ["#19"], title: "모험물 : 마법진" },
          },
          {
            type: "True",
            detail: { subTitle: ["#20"], title: "모험물 : 난파선 잔해" },
          },
          {
            type: "True",
            detail: { subTitle: ["#21"], title: "모험물 : 참돌고래" },
          },
          {
            type: "True",
            detail: { subTitle: ["#22"], title: "모험물 : 극지 맘모스" },
          },
          {
            type: "True",
            detail: { subTitle: ["#23"], title: "모험물 : 붉은낙타" },
          },
          {
            type: "True",
            detail: { subTitle: ["#24"], title: "모험물 : 유니콘" },
          },
          {
            type: "False",
            detail: { subTitle: ["#25"], title: "모험물 : 유령 가오리" },
          },
          {
            type: "False",
            detail: { subTitle: ["#26"], title: "모험물 : 세이렌" },
          },
          {
            type: "True",
            detail: { subTitle: ["#27"], title: "모험물 : 달의 탑" },
          },
          {
            type: "True",
            detail: { subTitle: ["#28"], title: "모험물 : 신의 창" },
          },
          {
            type: "True",
            detail: { subTitle: ["#29"], title: "모험물 : 기에나 석상" },
          },
          {
            type: "False",
            detail: { subTitle: ["#30"], title: "모험물 : 오로라" },
          },
          {
            type: "True",
            detail: { subTitle: ["#31"], title: "모험물 : 소용돌이" },
          },
          {
            type: "True",
            detail: { subTitle: ["#32"], title: "모험물 : 침묵하는 섬" },
          },
          {
            type: "False",
            detail: { subTitle: ["#33"], title: "모험물 : 토토이끼 배" },
          },
          {
            type: "True",
            detail: { subTitle: ["#34"], title: "모험물 : 북해의 눈" },
          },
          {
            type: "True",
            detail: { subTitle: ["#35"], title: "모험물 : 남해의 눈" },
          },
          {
            type: "False",
            detail: { subTitle: ["#36"], title: "모험물 : 죽은자의 눈" },
          },
          {
            type: "True",
            detail: { subTitle: ["#37"], title: "모험물 : 의문의 상자" },
          },
          {
            type: "True",
            detail: { subTitle: ["#38"], title: "모험물 : 해적의 의족" },
          },
          {
            type: "True",
            detail: { subTitle: ["#39"], title: "모험물 : 해적의 깃발" },
          },
          {
            type: "True",
            detail: { subTitle: ["#40"], title: "모험물 : 헤스티아호" },
          },
          {
            type: "True",
            detail: { subTitle: ["#41"], title: "모험물 : 환영 나비" },
          },
          {
            type: "True",
            detail: { subTitle: ["#42"], title: "모험물 : 대왕 조개" },
          },
          {
            type: "True",
            detail: { subTitle: ["#43"], title: "모험물 : 천 덮인 선수상" },
          },
          {
            type: "True",
            detail: { subTitle: ["#44"], title: "모험물 : 여인의 얼음 조각상" },
          },
          {
            type: "False",
            detail: { subTitle: ["#45"], title: "모험물 : 눈썰매" },
          },
          {
            type: "True",
            detail: { subTitle: ["#46"], title: "모험물 : 잃어버린 상선" },
          },
        ],
      },
      {
        title: "이그네아의 징표 획득 현황",
        getCount: "12",
        totalCount: "14",
        collection: [
          {
            type: "True",
            detail: { subTitle: ["#1"], title: "이그네아의 징표 : 아르테미스" },
          },
          {
            type: "True",
            detail: { subTitle: ["#2"], title: "이그네아의 징표 : 유디아" },
          },
          {
            type: "True",
            detail: {
              subTitle: ["#3"],
              title: "이그네아의 징표 : 루테란 서부",
            },
          },
          {
            type: "True",
            detail: {
              subTitle: ["#4"],
              title: "이그네아의 징표 : 루테란 동부",
            },
          },
          {
            type: "True",
            detail: { subTitle: ["#5"], title: "이그네아의 징표 : 토토이크" },
          },
          {
            type: "True",
            detail: { subTitle: ["#6"], title: "이그네아의 징표 : 애니츠" },
          },
          {
            type: "True",
            detail: { subTitle: ["#7"], title: "이그네아의 징표 : 아르데타인" },
          },
          {
            type: "True",
            detail: { subTitle: ["#8"], title: "이그네아의 징표 : 베른 북부" },
          },
          {
            type: "True",
            detail: { subTitle: ["#9"], title: "이그네아의 징표 : 슈샤이어" },
          },
          {
            type: "True",
            detail: { subTitle: ["#10"], title: "이그네아의 징표 : 로헨델" },
          },
          {
            type: "True",
            detail: { subTitle: ["#11"], title: "이그네아의 징표 : 욘" },
          },
          {
            type: "True",
            detail: { subTitle: ["#12"], title: "이그네아의 징표 : 페이튼" },
          },
          {
            type: "False",
            detail: { subTitle: ["#13"], title: "이그네아의 징표 : 파푸니카" },
          },
          {
            type: "False",
            detail: { subTitle: ["#14"], title: "이그네아의 징표 : 베른 남부" },
          },
        ],
      },
      {
        title: "세계수의 잎 획득 현황",
        getCount: "16",
        totalCount: "61",
        collection: [
          {
            type: "True",
            detail: { subTitle: ["#1"], title: "세계수의 잎 #1" },
          },
          {
            type: "False",
            detail: { subTitle: ["#2"], title: "세계수의 잎 #2" },
          },
          {
            type: "True",
            detail: { subTitle: ["#3"], title: "세계수의 잎 #3" },
          },
          {
            type: "True",
            detail: { subTitle: ["#4"], title: "세계수의 잎 #4" },
          },
          {
            type: "False",
            detail: { subTitle: ["#5"], title: "세계수의 잎 #5" },
          },
          {
            type: "False",
            detail: { subTitle: ["#6"], title: "세계수의 잎 #6" },
          },
          {
            type: "False",
            detail: { subTitle: ["#7"], title: "세계수의 잎 #7" },
          },
          {
            type: "False",
            detail: { subTitle: ["#8"], title: "세계수의 잎 #8" },
          },
          {
            type: "True",
            detail: { subTitle: ["#9"], title: "세계수의 잎 #9" },
          },
          {
            type: "True",
            detail: { subTitle: ["#10"], title: "세계수의 잎 #10" },
          },
          {
            type: "False",
            detail: { subTitle: ["#11"], title: "세계수의 잎 #11" },
          },
          {
            type: "False",
            detail: { subTitle: ["#12"], title: "세계수의 잎 #12" },
          },
          {
            type: "False",
            detail: { subTitle: ["#13"], title: "세계수의 잎 #13" },
          },
          {
            type: "False",
            detail: { subTitle: ["#14"], title: "세계수의 잎 #14" },
          },
          {
            type: "False",
            detail: { subTitle: ["#15"], title: "세계수의 잎 #15" },
          },
          {
            type: "True",
            detail: { subTitle: ["#16"], title: "세계수의 잎 #16" },
          },
          {
            type: "False",
            detail: { subTitle: ["#17"], title: "세계수의 잎 #17" },
          },
          {
            type: "False",
            detail: { subTitle: ["#18"], title: "세계수의 잎 #18" },
          },
          {
            type: "False",
            detail: { subTitle: ["#19"], title: "세계수의 잎 #19" },
          },
          {
            type: "False",
            detail: { subTitle: ["#20"], title: "세계수의 잎 #20" },
          },
          {
            type: "False",
            detail: { subTitle: ["#21"], title: "세계수의 잎 #21" },
          },
          {
            type: "True",
            detail: { subTitle: ["#22"], title: "세계수의 잎 #22" },
          },
          {
            type: "False",
            detail: { subTitle: ["#23"], title: "세계수의 잎 #23" },
          },
          {
            type: "False",
            detail: { subTitle: ["#24"], title: "세계수의 잎 #24" },
          },
          {
            type: "False",
            detail: { subTitle: ["#25"], title: "세계수의 잎 #25" },
          },
          {
            type: "False",
            detail: { subTitle: ["#26"], title: "세계수의 잎 #26" },
          },
          {
            type: "True",
            detail: { subTitle: ["#27"], title: "세계수의 잎 #27" },
          },
          {
            type: "False",
            detail: { subTitle: ["#28"], title: "세계수의 잎 #28" },
          },
          {
            type: "True",
            detail: { subTitle: ["#29"], title: "세계수의 잎 #29" },
          },
          {
            type: "False",
            detail: { subTitle: ["#30"], title: "세계수의 잎 #30" },
          },
          {
            type: "False",
            detail: { subTitle: ["#31"], title: "세계수의 잎 #31" },
          },
          {
            type: "False",
            detail: { subTitle: ["#32"], title: "세계수의 잎 #41" },
          },
          {
            type: "False",
            detail: { subTitle: ["#33"], title: "세계수의 잎 #42" },
          },
          {
            type: "False",
            detail: { subTitle: ["#34"], title: "세계수의 잎 #43" },
          },
          {
            type: "False",
            detail: { subTitle: ["#35"], title: "세계수의 잎 #44" },
          },
          {
            type: "True",
            detail: { subTitle: ["#36"], title: "세계수의 잎 #45" },
          },
          {
            type: "False",
            detail: { subTitle: ["#37"], title: "세계수의 잎 #46" },
          },
          {
            type: "False",
            detail: { subTitle: ["#38"], title: "세계수의 잎 #50" },
          },
          {
            type: "True",
            detail: { subTitle: ["#39"], title: "세계수의 잎 #51" },
          },
          {
            type: "True",
            detail: { subTitle: ["#40"], title: "세계수의 잎 #52" },
          },
          {
            type: "True",
            detail: { subTitle: ["#41"], title: "세계수의 잎 #53" },
          },
          {
            type: "False",
            detail: { subTitle: ["#42"], title: "세계수의 잎 #54" },
          },
          {
            type: "False",
            detail: { subTitle: ["#43"], title: "세계수의 잎 #55" },
          },
          {
            type: "False",
            detail: { subTitle: ["#44"], title: "세계수의 잎 #59" },
          },
          {
            type: "False",
            detail: { subTitle: ["#45"], title: "세계수의 잎 #60" },
          },
          {
            type: "False",
            detail: { subTitle: ["#46"], title: "세계수의 잎 #61" },
          },
          {
            type: "False",
            detail: { subTitle: ["#47"], title: "세계수의 잎 #62" },
          },
          {
            type: "True",
            detail: { subTitle: ["#48"], title: "세계수의 잎 #63" },
          },
          {
            type: "False",
            detail: { subTitle: ["#49"], title: "세계수의 잎 #64" },
          },
          {
            type: "False",
            detail: { subTitle: ["#50"], title: "세계수의 잎 #68" },
          },
          {
            type: "False",
            detail: { subTitle: ["#51"], title: "세계수의 잎 #69" },
          },
          {
            type: "True",
            detail: { subTitle: ["#52"], title: "세계수의 잎 #70" },
          },
          {
            type: "False",
            detail: { subTitle: ["#53"], title: "세계수의 잎 #71" },
          },
          {
            type: "True",
            detail: { subTitle: ["#54"], title: "세계수의 잎 #72" },
          },
          {
            type: "False",
            detail: { subTitle: ["#55"], title: "세계수의 잎 #73" },
          },
          {
            type: "False",
            detail: { subTitle: ["#56"], title: "세계수의 잎 #77" },
          },
          {
            type: "False",
            detail: { subTitle: ["#57"], title: "세계수의 잎 #78" },
          },
          {
            type: "False",
            detail: { subTitle: ["#58"], title: "세계수의 잎 #79" },
          },
          {
            type: "False",
            detail: { subTitle: ["#59"], title: "세계수의 잎 #80" },
          },
          {
            type: "False",
            detail: { subTitle: ["#60"], title: "세계수의 잎 #81" },
          },
          {
            type: "False",
            detail: { subTitle: ["#61"], title: "세계수의 잎 #82" },
          },
        ],
      },
    ],
  },
};
