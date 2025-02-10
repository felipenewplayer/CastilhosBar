/* eslint-disable react/prop-types */
export const Paragraph = ({children, rest}) =>{
    return(
       <p
       className="text-white text-base sm:text-2xl p-3 "
       {...rest}
         >{children}</p>
    )
}
