import React from "react";
import "../CSS/Button.css";
const Button = ({ item, activeUser }) => {
  return (
    <button
      onClick={item.onClick}
      style={{
        backgroundColor: item.color,
        width: item.width,
        display: activeUser ? "block" : "none" && item.display,
      }}
    >
      {item.text1}
    </button>
  );
};

export default Button;

// import React from "react";
// import "../CSS/Button.css";
// const Button = ({ item, onclick, className }) => {
//   return (
//     <button
//       className={className}
//       style={{ backgroundColor: item.color }}
//       onClick={onclick}
//     >
//       {item.text1}
//     </button>
//   );
// };
// export default Button;
