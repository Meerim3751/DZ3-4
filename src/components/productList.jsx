import ListItem from "./listItem";
function ProductList ({items}){
    
    return (
        <div className="Items">
            {items.map (item =>
                 <ListItem img = {item.img} title = {item.t} desc = {item.d} price = {item.p} />
            )}
        </div>
    )
}

export default ProductList;
