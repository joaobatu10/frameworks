import styles from './Sidebar.module.css'
import { PencilLineIcon } from '@phosphor-icons/react'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://avatars.githubusercontent.com/u/165338243?v=4"
            alt="" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/165338243?v=4" 
                alt="" />

                <strong>João Vitor Batu</strong>
                <span>Desenvolvedor Frontend</span>
            </div>

            <footer>
                
                <a href="#">
                    <PencilLineIcon size={20} />
                    Edite seu perfil
                </a>
            </footer>



        </aside>
    );
}