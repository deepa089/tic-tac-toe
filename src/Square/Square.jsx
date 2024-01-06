// import { useState } from 'react';
import './Square.css'
const Square = ({value, onSquareClick}) => {
    // const [value, setValue] = useState(null)
    // function handleClick() {
    //     console.log('clicked!');
    //     setValue('X')
    //   }

    return (
        <div>
            <button className='square' onClick={onSquareClick}> {value} </button>
        </div>
    );
};

// Square.propTypes = {
//     value:.string
//   }
// Square.prototype.value = String
// Square.prototype.onSquareClick = Function
export default Square;