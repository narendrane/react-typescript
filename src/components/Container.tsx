type StyleProps = {
    styles: React.CSSProperties
}
export const Container = (props: StyleProps) => {
    return <div style={props.styles}>
        CSS Properties
    </div>
}