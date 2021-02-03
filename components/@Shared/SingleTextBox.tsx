import React from 'react';
import _ from '../../Utility';

interface ISingleTextBox {
  arr : {
    value : string
  }[]
}

const SingleTextBox : React.FC<ISingleTextBox> = ({
  arr
}) => {
  return (
    <div className="singleTextWrap">
      {
        arr.map(({value}, index) => {
          return (
            <div className="singleText rem09" key={'singleText'+index}>
              {_.getOnlyText(value)}
            </div>
          )
        })
      }
    </div>
  )
}

export default SingleTextBox;