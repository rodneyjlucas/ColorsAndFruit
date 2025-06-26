import { Fragment, useState } from 'react'

import './App.css'



const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];


const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);


const List = ({ items, handleClick, selectedItems }) => (

  <>
    <ul className="List">
      {items.map(item => (
        <li key={item.name} className={`List__item List__item--${item.color} ${selectedItems.includes(item.name) ? 'List__item--selected' : "List__item--notSelected"}`} onClick={()=>{
          handleClick(item.name)}
        }>
          {item.name}
        </li>
      ))}
    </ul>
  </>
);


function SelectedList ({ items }) {
  return (
    <>
      <h4>selected items: </h4>
        
      { 
        items.map(name => <p key={name}>{name}</p>)
      }

    </>
)};

function App() {
  const [selected, setSelected] = useState([]) 
  
  const handleClick = function(name) {
    const newList = selected.includes(name) ? selected.filter(itr => itr !== name) : [...selected, name]
    setSelected([...newList]);
  }

  return (
    <>
     <section>
      <SelectedList items={selected} />
     </section>
      <List items={items} selectedItems ={selected} handleClick={handleClick}/>
    </>
  )
}

export default App
