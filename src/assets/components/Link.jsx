/* eslint-disable react/prop-types */
export const Link = ({children, rest}) =>{
    return(
        <a 
        className="text-orange-500/80 text-xl sm:text-3xl   transition duration-700 ease-linear hover:text-orange-500/80 cursor-pointer "  
         {...rest}
        >{children}
        </a>
    )
}