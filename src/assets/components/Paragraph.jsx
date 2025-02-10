/* eslint-disable react/prop-types */
export const Paragraph = ({children, rest}) =>{
    return(
       <p

       className="
       text-white 1xl:text-[1px] p-4 lg:text-3xl  lg:pl-10 sm:text-2xl text-2xl xl:text-2xl"

       {...rest}
         >{children}</p>
    )
}
