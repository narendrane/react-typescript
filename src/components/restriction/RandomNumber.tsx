type ValueProps = {
  value: number
}

type IsPosotiveProps = ValueProps & {
    isPostive: boolean
    isNegative?: never
}

type IsNegativeProps = ValueProps & {
    isNegative: boolean
    isPostive?: never
}

type RandomNumberProps = IsPosotiveProps | IsNegativeProps
export const RandomNumber = ({value, isPostive, isNegative}: RandomNumberProps) => {
    return (
        <div>
        {value}{isPostive && 'Positive'}{isNegative && 'Negative'}
        </div>
    )
}