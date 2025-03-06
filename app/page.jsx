import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import Card from "../components/Card"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className={styles.container}>
    <Header />
      <main className={styles.main}>
        <div className={styles.article}>
          <Card className={styles.card} title="Curiosidade 1 🎶" content="A Rapunzel já apareceu em várias outras obras da Disney, como “A Casa do Mickey Mouse”, “Once Upon a Time” e também “Ralph Breaks the Internet”." />
          <Card className={styles.card} title="Curiosidade 2 🌺" content="O filme Enrolados é baseado no conto de fadas Rapunzel, dos Irmãos Grimm. Porém, o filme tem adaptações para torná-lo mais legal e divertido." />
          <Card className={styles.card} title="Curiosidade 3 ✨" content="O icônico cabelo da personagem passou por várias versões antes de ser longo e dinâmico que vemos, exigindo um software avançado para animá-lo." />
        </div>
        <aside className={styles.aside}>
          <div className={styles.rapunzel}>
            <img src="https://wallpapers.com/images/hd/rapunzel-pictures-2e111ao1nmo2zscr.jpg" alt="Rapunzel" />
          </div>
        </aside>
      </main>
      <Footer  />
      </div>
)
}