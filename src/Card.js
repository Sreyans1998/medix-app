import {Card} from 'react-bootstrap';

const CardProperty = (props) =>{
    return (
        <>
            <div className="col-lg-3 col-6">
                <Card className="my-5 CardStyle">
                    <Card.Img class="CardimgStyle" variant="top" src={props.imgsrc} alt="props" style={{height:`160px`}} />
                    <Card.Body  className="text-center">
                        <Card.Text>
                            {props.title}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default CardProperty;