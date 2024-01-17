type CustomButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>
export const CustomButton = ({variant, children, ...rest}: CustomButtonProps) => {
    return(
        <div>
            <button className={`class-with-${variant}`} {...rest}>{children}</button>
        </div>
    )
}