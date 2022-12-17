function MenuItem ({text, url}) {
    return (
        <div className="menuItems">
            <li>
                <a href= {url}>
                    {text}
                </a>
            </li>
         </div>
    )   
 }
export default MenuItem;
