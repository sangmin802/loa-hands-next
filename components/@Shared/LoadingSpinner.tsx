import React from 'react';

const LoadingSpinner : React.FC<{isLoadingStyle : string}> = ({
  isLoadingStyle
}) => {
  return (
    <div className={isLoadingStyle}>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default LoadingSpinner;