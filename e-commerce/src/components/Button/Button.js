// import React from 'react';
// import {NavLink} from 'react-router-dom';

// import './Button.css';

// const style = ['primaryButton', 'secondryButton'];
// const size  = ['mediumButton', 'largeButton'];

// export const Button = ({
//     buttonSytle, 
//     buttonSize,
//     children,
//     onClick,
//     type
// }) => {

//     const ButtonStyle = style.includes(buttonSytle) ? buttonSytle : style[0];
//     const ButtonSize = size.includes(buttonSize) ? buttonSize : size[0];

//     return(
//         <NavLink>
//             <button
//                 className={`btn ${ButtonStyle} ${ButtonSize}`}
//                 onClick = {onClick}
//                 type = {type}
//             >
//                 {children}
//             </button>
//         </NavLink>
//     );
// };