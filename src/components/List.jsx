import PropTypes from "prop-types"

function List({items=[], category ="Category"}){


    // fruits.sort((a, b) => a.name.localeCompare(b.name)); -- Sort by name
    // fruits.sort((a, b) => b.name.localeCompare(a.name));  -- Sort reverse alphabetical  
    // fruits.sort((a, b) => a.calories - b.calories)       -- Ascending calories
    // fruits.sort((a, b) => b.calories - a.calories);      -- Descending calories

    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //     {fruit.name}: &nbsp;
    //     <b>{fruit.calories}</b></li>)
    
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)     -- Get fruits that has low calories
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)   -- Get fruits that has high calories
    
    const listItems = items.map(item => <li key={item.id}>
                                          {item.name}: &nbsp;
                                          <b>{item.calories}</b></li>
                                                      
    )
    

    return (
        <>
        <div className="container ">
            <h3 className="category">{category}</h3>
            <ul className="list-items"> 
                {listItems}
            </ul>
        </div>
        
        </>
        
    )
}

List.propTypes = {
    category: PropTypes.string,
     items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number
     }))
}

export default List