import { forwardRef } from "react"

const Input = forwardRef(function Input({label,InputContainer="input", ...props}, ref){
    return(
        <div className="flex mb-4 flex-col">
            <label className="text-stone-500 text-sm font-semibold">{label.toUpperCase()}</label>
            <InputContainer ref={ref} {...props} className="p-1 w-full focus:border-b-2 border-stone-600 bg-stone-200 outline-none"  />
        </div>
    )
})

export default Input