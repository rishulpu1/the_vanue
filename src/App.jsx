import './resources/styles.css';
import Header from './components/header_footer/header';
const App = () => {
  return (
    <>
      <Header />
      <div style={{backgroundColor: 'red', height: '800px'}}></div>
      <div style={{backgroundColor: 'green', height: '800px'}}></div>
      <div style={{backgroundColor: 'blue', height: '800px'}}></div>
      <div style={{backgroundColor: 'yellow', height: '800px'}}></div>
    </>
  )
}

export default App
