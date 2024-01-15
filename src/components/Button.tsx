type ButtonProps = {
    //handleclick with accepts no argument and returns nothing.
   // handleClick: () => void
    //handleclick with event
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
export const Button = (props: ButtonProps) => {
    return <div>
        <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
    </div>
}