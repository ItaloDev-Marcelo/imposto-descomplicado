import React from 'react'

type commumStepContainerProps = {children: React.ReactNode}

const CommumStepContainer = ({children}:commumStepContainerProps ) => {
  return (
    <div className='card bg-white card-xs shadow-sm w-[360px]  flex-col item-center gap-4 p-4 rounded-md'>
        {children}
    </div>
  )
}

export default CommumStepContainer