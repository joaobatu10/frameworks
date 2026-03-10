import styles from './Post.module.css';
import {ptBR} from 'date-fns/locale';
import { format, formatDistanceToNow } from 'date-fns';
import { Comment } from './Comment';
export function Post() {
    const publishedDate = new Date ('2026-03-07 08:13:30');
    const publishedDateFormatted = format(publishedDate, "d 'de' MMM 'às' HH:mm'h'", { 
        locale: ptBR });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedDate, {
        locale: ptBR,
        addSuffix: true,
    });

    return (
        <article className = {styles.post}>
            <header>
                <div className = {styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/165338243?v=4" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>João Vitor Batu</strong>
                        <span>Desenvolvedor Frontend</span>
                    </div>
                </div>
                    <time title={publishedDateFormatted} dateTime={publishedDate.toISOString()}>
                        Publicado {publishedDateRelativeToNow}
                    </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. 
                O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#" >👉 Jane.design/doctorcare</a></p>
                <p>
                <a href="#">#novoprojeto</a> {' '}
                <a href="#">#nlw</a> {' '}
                <a href="#">#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>   
                <Comment />
                <Comment />
                <Comment /> 

            </div>

        </article>
    );
}