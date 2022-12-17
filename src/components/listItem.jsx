function ListItem ({img, title, desc, price}) {
    return (
        <div className="Item">
            <img src= {img} alt="" />
            <h3>{title}</h3>
            <p>{desc}</p>
            <b>{price}</b>
        </div>
    )
}

export default ListItem;
