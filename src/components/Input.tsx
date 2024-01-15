type InputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = ({value, handleChange}: InputProps) => {
    // handler can also be used from here
    const handleInputchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return <div>
        <input type="text" value={value} onChange={(event) => handleChange(event)}/>
    </div>
}   