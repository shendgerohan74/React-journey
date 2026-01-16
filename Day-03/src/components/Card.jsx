
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  console.log(props);
  
  return (

      <div className="Card">

        <div className="top">
          <img src={props.brandLogo} alt="" />
          <button>Save <Bookmark size={15} /> </button>
        </div>

        <div className="center">
          <h3>{props.companyName} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div className='span'><button>{props.tag1}</button> <button>{props.tag2}</button></div>
        </div>

        <hr />

        <div className="bottom">
          <div className="b-bottom">
            <h3>{props.pay}</h3>
            <div className="location">
              {props.location}
            </div>
          </div>  
          <button className='apply'>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
