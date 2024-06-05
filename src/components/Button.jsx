export default function Button({children, ...props}){
 return(
    <button className="text-sm md:text-base text-stone-400 hover:text-stone-100 hover:bg-stone-600 mt-6 bg-stone-700 p-2 rounded" {...props}>{children}</button>
 )
}