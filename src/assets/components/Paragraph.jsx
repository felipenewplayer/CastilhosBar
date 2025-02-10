/* eslint-disable react/prop-types */
export const Paragraph = ({children, rest}) =>{
    return(
       <p

       className="text-white text-2xl 1xl:text-[18px] 1xl:[10px] p-4 lg:text-3xl  lg:pl-10"

       {...rest}
         >{children}</p>
    )
}
