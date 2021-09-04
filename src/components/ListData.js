import { useEffect, useState } from "react";
import { CarouselItem, Carousel } from "react-bootstrap";

const ListData = () => {
    const [nasa, setNasa] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://apodapi.herokuapp.com/api/?count=20");
            const data = await response.json();
            // console.log (data);
            setNasa(data);
        };
        fetchData();
    }, [])

    const [slide, setSlide] = useState(0);
    const handleSelect = (selectedSlide, e) => {
        setSlide(selectedSlide)
    }

    return (
        <>
        <h1 className="judullist">Astronomy Picture</h1> 
        <div className="home">
            <Carousel autoPlay indicators={false} controls={true} activeIndex={slide} onSelect={handleSelect}>
            {nasa.map((items,index) => (            
                <CarouselItem key={index}>
                    <img src={items.url} 
                        alt={items.title} 
                        height={400} 
                        className="container-fluid"
                    />
                    <div className="container-fluid" style={{textAlign:"center"}}>
                        <label><b>Title :</b> {items.title}</label>
                    </div>
                    <div className="container-fluid" style={{textAlign:"center"}}>
                        <label><b>Date :</b> {items.date}</label>
                    </div>
                    <div className="container-fluid" style={{textAlign:"center"}}>
                        <label><b>Copyright :</b> {items.copyright}</label>
                    </div>
                    <hr/>
                    <div className="container-fluid" style={{textAlign:"justify"}}>
                        <p><b>Description :</b> {items.description}</p>
                    </div>
                </CarouselItem>
            
            ))}
            </Carousel>
        </div>
        </>
        
    )
}

export default ListData;