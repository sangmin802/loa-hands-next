export default class CollectionInfo {
  collectionMini
  collectionDetail
  constructor(co){
    const parser = new DOMParser();
    const doc = parser.parseFromString(co, 'text/html');

    this.collectionMini = [...doc.getElementsByClassName('lui-tab__menu')[0].children].map(el => {
      const child = el.childNodes;
      return{
        name : child[0].textContent.trim(),
        size : child[1].textContent
      }
    });
    this.collectionDetail = [...doc.getElementsByClassName('collection-list')]
    .map((colPart, index) => {
      const child = colPart.children;
      const title = child[0].children[0].textContent;
      const getCount = child[0].children[1].children[0].textContent;
      const totalCount = child[0].children[1].children[1].textContent;
      return {
        title, getCount, totalCount,
        collection : [...child[1].children]
        .map(li => {
          let childNodes = li.childNodes;
          let subTitle = childNodes[0].textContent;
          let title = childNodes[1].textContent.trim();
          let type = childNodes[2]?.textContent === '획득' ? 'True' : 'False';
          if(index === 4){ // 모코코
            const get = childNodes[3].childNodes[1].textContent;
            const total = childNodes[3].childNodes[3].textContent;
            const area = childNodes[2].textContent.trim();
            subTitle = childNodes[1].textContent
            type = get === total ? 'True' : 'False';
            title = `${area} ${get} / ${total}`;
          }
          return {
            type,
            detail : {subTitle : [`#${subTitle}`], title}
          }
        })
      }
    })
  }
}