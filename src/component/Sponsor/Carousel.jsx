import telkomsel from '../../assets/telkomsel.png'
import windows from '../../assets/windows.png'
import indosat from '../../assets/indosat.png'
import Carousel from 'react-bootstrap/Carousel';

function Sponsor() {
  return (
    <Carousel fade>
              <h6 className='my-4 gap-3'> Thanks to our sponsor :</h6>

      <Carousel.Item>
        <img src={telkomsel} alt="telkomsel" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={windows} alt="windows" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={indosat} alt="indosat" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sponsor;