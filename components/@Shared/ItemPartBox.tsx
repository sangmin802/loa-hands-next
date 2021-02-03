import React from 'react';
import _ from '../../Utility';

interface IItemPartBox {
  arr : {
    value : {
      Element_000 : string
      Element_001 : string
    }
  }[]
}

const ItemPartBox : React.FC<IItemPartBox> = ({
  arr
}) => {
  return (
    <div className="itemPartBoxWrap">
      {
        arr.map(({value : {Element_000, Element_001}}, index) => {
          return (
            <div className="itemPartBox" key={'itemPartBox'+index}>
              <div className="itemPartBoxTitle rem09">{_.getOnlyText(Element_000)}</div>
              <div className="itemPartBoxContent rem09">{_.getOnlyText(Element_001)}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ItemPartBox;