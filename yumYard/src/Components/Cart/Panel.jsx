import React from 'react';
import useStore from './store';



const Panel = () => {

  const objectList = useStore((state) => state.objectList);

  return (
    <div>
      <div>
      <ul>
        {objectList.map((obj, index) => (
          <li key={index}>{obj.title}</li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Panel;
