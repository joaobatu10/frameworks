import Styles from './Comment.module.css';
import { ThumbsUp } from '@phosphor-icons/react';
export function Comment (){
    return (
        <div className={Styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/165338243?v=4" alt="" />

            <div className={Styles.commentBox}>
                <div className={Styles.commentContent}>
                    <header>
                        <strong>João Vitor Batu</strong>
                        <time title='1h atras' dateTime='2026-05-11 08:13:30'>Cerca de 1h atrás</time>
                    </header>

                    <p>Muito bom, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>  



        </div>    
        );}