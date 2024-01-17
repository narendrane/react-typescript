type PolyMorphOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    as?: E
    children: React.ReactNode
}
type PolyMorphProps<E extends React.ElementType> = PolyMorphOwnProps<E> & Omit<React.ComponentProps<E>, keyof PolyMorphOwnProps<E>>
export const PolyMorph = <E extends React.ElementType  = 'div'>({size, color, as, children}: PolyMorphProps<E>) => {
    const Component = as || 'div'
    return(
            <Component className={`class-with-${size}-${color}`}>{children}</Component>
    )
}