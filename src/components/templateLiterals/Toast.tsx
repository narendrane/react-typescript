type HorizontalPosition = 'left' | 'center' | 'right'

type VerticalPosition = 'top'| 'center' | 'bottom'

type PositionProps = {
    position : Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}
export const Toast = ({position}: PositionProps) => {
    return (
        <div>
            Toast Position: {position}
        </div>
    )
}