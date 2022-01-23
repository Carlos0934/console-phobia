import { FC } from 'react'

export const TopPanel: FC = ({ children }) => {
  return (
    <div className="top-panel w-full relative -top-2 rounded-b-[15%]  py-10  drop-shadow-md transition-all duration-200">
      <h1 className="text-4xl font-semibold text-center title opacity-50">
        Console Phobia
      </h1>
      {children}
    </div>
  )
}
