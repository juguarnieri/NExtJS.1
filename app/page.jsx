import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import Card from "../components/Card"
import Footer from "../components/Footer"

export default function Home() {
return (
    <div className={styles.container}>
        <Header />
    <main className={styles.main}>
    <div className={styles.left}>
                <Card title= "Curiosidade 1" content= "A personagem da Rapunzel foi inspirada no conto de fadas alemão “Rapunzel” dos Irmãos Grimm."/>
                <Card title= "Curiosidade 2" content= "O filme “Enrolados” foi lançado em 2010 e foi um grande sucesso, ganhando um Globo de Ouro de Melhor Filme de Animação."/>
                <Card title= "Curiosidade 3" content= "A Rapunzel já apareceu em várias outras obras da Disney, como “A Casa do Mickey Mouse”, “Once Upon a Time” e “Ralph Breaks the Internet”."/>
                </div>
        <aside className={styles.aside}>
            <div className={styles.rapunzel}>
                <img src="https://wallpapers.com/images/hd/rapunzel-pictures-2e111ao1nmo2zscr.jpg" alt="Rapunzel" />
            </div>
        </aside>
        </main>
        <Footer />
    </div>
    )
}