import LineItem from "./LineItem";

const ItemList = ({items, handleDelete, handleCheck})=>{
    return (
        <ul>
        {
            items.map((item) =>(
                <LineItem 
                    key = {item.id}
                    item= {item}
                    handleDelete={handleDelete} 
                    handleCheck={handleCheck}>
                </LineItem>
            ))
        }
        </ul>
        
    )
}

export default ItemList;