import React from "react";
import { list, listD } from "./imgdetil";
const Imagetitle = (props) => {
  return (
    <div className="img-gridItem ">
      <img src={props.img} alt="" className="img-after" />
      <h4 className="img-gridtitle">{props.title}</h4>
    </div>
  );
};

export function Images() {
  return (
    <>
      {list.map((item, pos) => {
        return <Imagetitle key={pos} {...item} />;
      })}
    </>
  );
}
export function ImagesDesktop() {
  return (
    <div className="grid-container">
      {listD.map((item, pos) => {
        return <Imagetitle key={pos} {...item} />;
      })}
    </div>
  );
}
