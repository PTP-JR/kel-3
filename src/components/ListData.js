import { useEffect, useState } from "react";
import { Card , Container, Row, Col } from "react-bootstrap";

const ListData = () => {
    const [nasa, setNasa] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://apodapi.herokuapp.com/api/?count=20");
            const data = await response.json();
            console.log (data);
            setNasa(data);
        };
        fetchData();
    }, [])

    return (
        <div className="home">
            <h1 className= "judullist">Astronomy Picture</h1> 
        
            {nasa.map((items,index) => (
                <div id= "listdata" key={index}>
                 <Container>
                 <Row>
                 <Col >
                 <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={items.url} width= "150px" height="150px" alt="NASA" />
                 <Card.Body widht="200px" height= "200px">
                     <Card.Title>{items.title}</Card.Title><Card.Text>
                     <p>Copyright : {items.copyright}</p>
                    </Card.Text>
                </Card.Body>
                </Card> 
                </Col>
                </Row>
                </Container>   
                </div>
                
            ))}

        </div>
    )
}

export default ListData;