import classes from "./header.module.css"
import Menu from "./menu"
import { FaShoppingCart } from "react-icons/fa";
function Header(){
  const menuItems = [
    {id : 1, t : 'Furniture', url: 'https://google.com'},
    {id : 2, t : 'Category', url: 'https://yandex.com'},
    {id : 3, t : 'Collection', url: 'https://yandex.com'},
    {id : 4, t : 'About Us', url: 'https://yandex.com'},
    {id : 5, t : 'Blog', url: 'https://yandex.com'}
]
    const formChange = (e) => {
        console.log(e.target.value)
    }
    const formSumbit = (e) => {
        console.log('No furniture found')
        e.preventDefault()
    }
    const formClick = (e) => {
        console.log('Nothing')
    }
    return (
        <>
            <div className= {classes.menuLinks}>
                <Menu items = {menuItems}/>
                <form  onSubmit={formSumbit}>
                    <input type="text" name="" onChange={formChange} />
                    <button >Search</button>
                </form>
                <FaShoppingCart onClick={formClick}/>
            </div>
            <hr />
        </>
    )
  }
 

  export default Header;