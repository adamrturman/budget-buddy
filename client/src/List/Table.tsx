import * as React from "react";
import "./List.css";
import { Row } from '../Row'

export const Table = (props: any) => {
    // const characters = props.characters.map((person: any) => (
    //   <li>
    //     Name: {person.name}, Height: {person.height}, Mass: {person.mass},
    //     Homeworld: {person.homeworld}
    //   </li>
    // ));
    //  console.log("props in list", props);
    // const characters = props.characters.map((person: any) => (
    //   <tr>
    //     {person.name}
    //   </tr>
    // ));
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Height</th>
                    <th scope="col">Mass</th>
                    <th scope="col">Eye Color</th>
                    <th scope="col">Skin Color</th>
                    <th scope="col">Created on</th>
                    <th scope="col">Edited on</th>
                </tr>
            </thead>
            <tbody>
            {props.characters.map((character: any) => 
            <Row character={character} />)}
            </tbody>
        </table>
    ) 
  };