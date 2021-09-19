import React, {useContext } from "react";
import {Figure, Table} from 'react-bootstrap';
import { Content } from "./NavBar";

const Anime = () => {
  const context = useContext(Content)
    return(
        <> 
{context.item5.Name.map((Name) => {
  return <div className="Main2">
<Table bordered size="sm">
<thead>
<tr>
<th style={{background:'#f6f6a9'}}>
<h1>Popular {Name}</h1>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<div className="PopularAnime"> 
{context.item5.contents.map((item, index) => {
                return <Figure key={index} className="aj">
                <Figure.Image width={250} height={300} alt="171x180" src={`/Images/AnimeImages/${Name}/${item}.jpg`}/>
                <Figure.Caption style={{textAlign: 'center'}}>
                  {item}
                </Figure.Caption>
              </Figure>
              })}
              </div>  
          </td>
          </tr>
          </tbody>
          </Table>
</div>
})}
    </>)
} 

export default Anime;