import MenuItem from "./meniItem";
function Menu ({items}){
    
    return (
        <ul className="menuItems">
            {items.map (item =>
                <MenuItem key = {item.id} text = {item.t} url = {item.url} />
            )}
        </ul>
    )
}

export default Menu;