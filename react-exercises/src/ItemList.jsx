
const ItemList = ({items}) => {  // il componente riceve un array di oggetti (items come prop)
    return (
        // Creiamo una lista HTML non ordinata
       <ul>
        {items.map((item) => (  // map cicla su ogni oggetto della lista, per ognuno, items, creiamo un <li>
            <li key={item.id}>{item.nome}</li>  // item.id è la key () -> identificativo unico dell'oggetto
        ))}
       </ul> 
    );
};

export default ItemList;