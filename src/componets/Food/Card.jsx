import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card.css"


const Productcard = ({fooddata}) => {
  return (
    <>
    <div className='main'>
    <h1 className='text-center heading pt-3 pb-3 ' > Your Food Items</h1>
    <div  style={{minHeight:"100%"}} className='row  '>
    
        {fooddata.map(data=>
         <div className='col-md-3  justify-content-center d-flex   '>
             
    <Card className='card ' >
      <Card.Img variant="top" src={data.recipe.image} alt="Card image cap" />
      <Card.Body className='overflow-hidden'>
        <Card.Title>{data.recipe.label}</Card.Title>
        <Card.Text>
        Total Amount Of Calories : {Math.round(data.recipe.calories)}
        </Card.Text>
        <Button variant="primary">Go Buy</Button>
      </Card.Body>
    </Card>
    </div>)}
    </div>
    </div>
    </>
  )
}

export default Productcard

