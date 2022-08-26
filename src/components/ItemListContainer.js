import React from "react";
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import MediaCard from "./MediaCard";

export const ItemListContainer = (props) =>{
    return(
        <MediaCard name={props.texto} price={props.precio}/>
    );

}

export default ItemListContainer;