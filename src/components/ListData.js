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
        <div>
            <h3 className= "judullist">Astronomy Picture</h3> 
        
            {nasa.map((items,index) => (
                <div id= "listdata" key={index}>
                 <Container>
                 <Row>
                 <Col xs={6}>
                 <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={items.url}  alt="NASA" />
                 <Card.Body>
                     <Card.Title>Title : {items.title}</Card.Title><Card.Text>
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