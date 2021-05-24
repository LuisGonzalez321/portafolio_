import React from "react";

const index = ({ listElement }) => {
  return (
        listElement.map((item, i) => {
          return (
            <div key={i} className="box">
              <h4 className='subtitle is-size-4' >{ item.Tecnologia }</h4>
                <ul className='is-flex is-justify-content-start is-flex-wrap-wrap'>
                  {item.nombre.map((dat, i)=>{
                      return (
                        <li key={dat.id + i} className='mt-3 mr-3 '>{" "}
                          <code className='tag is-primary is-medium '>{dat.item}</code>{" "}
                        </li>
                      )}
                  )}
                </ul>
            </div>
          );
        })
  );
};

export default index;
