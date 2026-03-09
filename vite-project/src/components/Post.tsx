import styles from './Post.module.css';
export function Post() {
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
                    <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
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
        </article>
    );
}