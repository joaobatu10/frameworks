import Styles from './Avatar.module.css';

interface AvatarProps {
    src: string
    HasBorder?: boolean
}

export function Avatar({ src, HasBorder = true }: AvatarProps) {
    return (
        <img 
        className={HasBorder ? Styles.avatarWithBorder : Styles.avatar} 
        src={src} alt="" />
    )
}