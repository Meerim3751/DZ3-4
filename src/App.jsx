import './App.css'
import img1 from './images/chair.jpg'
import img2 from './images/table.jpg'
import img3 from './images/sofa.jpg'
import img4 from './images/cupboard.jpg'
import img5 from './images/miror.jpg'
import img6 from './images/bed.jpg'
import ProductList from "./components/productList";
import Header from './components/header/header'

function App(){
  const productItems = [
    {img: img1, t: 'Chair', d :'Lorem ipsum dolor sit amet consectetur adipisicing elit.', p : '170$'},
    {img: img2, t: 'Table', d :'Lorem ipsum dolor sit amet consectetur adipisicing elit.', p : '1790$'},
    {img: img3, t: 'Sofa', d :'Lorem ipsum dolor sit amet consectetur adipisicing elit.', p : '5900$'},
    {img: img4, t: 'Cupboard', d :'Lorem ipsum dolor sit amet consectetur adipisicing elit.', p : '4590$'},
    {img: img5, t: 'Miror', d :'Lorem ipsum dolor sit amet consectetur adipisicing elit.', p : '5000$'},
    {img: img6, t: 'Bed', d :'Lorem ipsum dolor sit amet consectetur adipisicing elit.', p : '7450$'}
  
]
    return ( 
      <>
        <Header/>
        <ProductList items = {productItems}/>
      </>  
    )
  }
 

  export default App;
