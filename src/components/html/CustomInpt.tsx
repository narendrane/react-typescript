type CustomInputProps = React.ComponentProps<'input'>
export const CustomInput = (props: CustomInputProps) => {
    return(
        <div>
            <input type="text" {...props}/>
        </div>
    )
}