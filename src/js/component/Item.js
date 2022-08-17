import React from 'react';
 
const Item = ({item}) => {
   return (
       <div>
           {item.task}
       </div>
   );
};
 
export default Item;