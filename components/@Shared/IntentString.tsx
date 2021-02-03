import React from 'react';
import _ from '../../Utility';

interface IIntentString {
  arr : {
    value : {
      key : {
        topStr : string
        contentStr : {
          key : {
            contentStr : string
          }
        }
      }
    }
  }[]
}

const IntentString : React.FC<IIntentString> = ({
  arr
}) => {
  const onlyValue = arr.map(intentString => {
    const {value} = intentString;
    return Object.values(value);
  });

  return (
    <div className="intentStringWrap">
      {
        onlyValue.map(el => {
          return el.map(({topStr, contentStr}, index) => {
            return (
              <div className="intentString" key={'intentString'+index}>
                <div className="intentStringTitle rem09">
                  {_.getOnlyText(topStr)}
                </div>
                <div className="intentStringContentWrap">
                  {
                    Object.values(contentStr).map(({contentStr}, index) => {
                      return(
                        <div className="intentStringContent rem09" key={'intentStringContent'+index}>
                          {_.getOnlyText(contentStr)}
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        })
      }
    </div>
  )
}

export default IntentString;