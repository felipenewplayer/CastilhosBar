/* eslint-disable react/prop-types */
export const Link = ({children, props}) =>{
    return(
        <a 
        className="text-white text-xl sm:text-3xl   transition duration-700 ease-linear hover:text-orange-500/80"  
         {...props}
        >{children}
        </a>
    )
}