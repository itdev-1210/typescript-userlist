import React from "react"
import "../styles/userslist.css"
import { ItemProps } from "../interfaces/types"


export const ListItem: React.FC<ItemProps> = props => {

  return (
    <div className="list-item-box">
      <div ref={props.refElement} className="list-item">
        <img src={props.avatarURL} alt="avatar" />
        <span>
          {props.firstName} {props.lastName}
        </span>
      </div>
    </div>
  );
};
