import styles from './App.module.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header/>
      <div className={styles.main}> 
        <h1>Conteudo...</h1>
      </div>
      <Footer/>
    </>
  )
}

export default App
