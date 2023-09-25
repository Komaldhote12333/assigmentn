import styles from './EventCarousel.module.css'; // Import the CSS module
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const EventCarousel = ({images}) => {
 

  if (!images) {
    return null;
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      swipeable={true}
      draggable={true}
    >
      {images?.map((item) => {
        return (
          <div key={item.id} className={styles['event-boxmain']}>
            <div className={styles['event-box']}> {/* Apply CSS module styles */}
              <div className={styles['img-event']}> {/* Apply CSS module styles */}
                <img src={item?.image} alt="" />
              </div>
             
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default EventCarousel;