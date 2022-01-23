import { FC } from 'react'

interface Props {
  title: string
  price: number
  picture: string
  url: string
}
export const ConsoleCard: FC<Props> = ({ title, price, picture, url }) => {
  return (
    <div className="w-[350px] group rounded-2xl card-panel shadow px-4 py-4 justify-center flex flex-col hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
      <img
        className=" object-contain  max-w-[150px] mx-auto   transform group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-200"
        src={picture}
        alt="switch"
      />
      <h3 className="col-span-3 font-light text-blue-500 text-md text-center mt-2 text-xl ">
        {title}
      </h3>
      <div className="flex flex-col gap-2">
        <span className="text-gray-500 font-semibold text-center text-lg ">
          USD $ {price}.00
        </span>
        <a
          className="bg-blue-400 rounded-full text-white  transform  text-center py-1.5 px-5  w-2/3 mx-auto mt-2  hover:-translate-y-1 hover:bg-blue-500 hover:drop-shadow-xl  transition-all duration-200"
          href={url}
        >
          View
        </a>
      </div>
    </div>
  )
}
