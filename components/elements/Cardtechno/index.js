import React from "react";

const index = ({ area, listElement }) => {
  return (
    <div className="box">
      <h4 className='subtitle is-size-4' >{area}</h4>
      <ul className='is-flex is-justify-content-start'>
        {listElement.map((item, i) => {
          return (
            <li key={item + i} className='mr-6'>
              {" "}
              <code className='tag is-primary is-medium '>{item.name}</code>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default index;
