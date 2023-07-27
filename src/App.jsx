import './resources/styles.css';
import Header from './components/header_footer/header';
import Footer from './components/header_footer/footer';
const App = () => {
  return (
    <div className='App'>
      <Header />
      <div style={{backgroundColor: 'red', height: '800px'}}></div>
      <div style={{backgroundColor: 'green', height: '800px'}}></div>
      <div style={{backgroundColor: 'blue', height: '800px'}}></div>
      <div style={{backgroundColor: 'yellow', height: '800px'}}></div>
      <Footer />
    </div>
  )
}

export default App
