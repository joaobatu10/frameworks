import Styles from './Comment.module.css';
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
export function Comment (){
    return (
        <div className={Styles.comment}>
            <Avatar src="https://avatars.githubusercontent.com/u/165338243?v=4" />

            <div className={Styles.commentBox}>
                <div className={Styles.commentContent}>
                    <header>
                        <div className={Styles.authorAndTime}>
                        <strong>João Vitor Batu</strong>
                        <time title='1h atras' dateTime='2026-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash />
                        </button>
                    </header>

                    <p>Muito bom, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={24}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>  



        </div>    
        );}