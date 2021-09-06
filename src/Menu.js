import React from 'react'

function Menu({items}) {
    return (
        <div className="section-center">
            {items.map((menuItem)=>{
                const {id, title, price, img, desc} = menuItem;
                return (
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className="photo" />
                        <div className="item-info">
                            <header>
                                <p>{title} </p>
                                <p className="price">$ {price} </p>
                            </header>
                            <p className="description">{desc} </p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Menu
