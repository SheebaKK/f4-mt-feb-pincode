// import axios from "axios"
import React from "react";

const List = (props) => {
  return (
    <>
      <div>
        <div className="card">
        {props?.item?.map((item, index) => {
              // console.log(item);
              return (
                <div key={index} className="divbox">
                  <div>Name :{item.Name}</div>
                  <div> Branch Type :{item.BranchType}</div>
                  <div> Delivery Status :{item.DeliveryStatus}</div>
                  <div> District : {item.Division}</div>
                  <div>State : {item.State}</div>
                </div>
              );
            })}
        </div>
        
              
      </div>
    </>
  );
};
export default List;