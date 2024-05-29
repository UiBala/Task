import img1 from '../assets/images/services/user.png'
import img2 from '../assets/images/services/document.png'
import img3 from '../assets/images/services/Layer_x0020_1.png'
import img4 from '../assets/images/services/edit.png'
import img5 from '../assets/images/services/quote.png'
import img6 from '../assets/images/services/hands.png'

const services = [
    {
        id:1,
        img:img1,
        title:'Select Your Role and Sign Up'
    },
    {
        id:2,
        img:img2,
        title:'Buyers Post Your Requirements'
    },
    {
        id:3,
        img:img3,
        title:' Review, Select, and Contact the Best Suppliers'
    },
    {
        id:4,
        img:img4,
        title:' Suppliers Complete your profile and get notified for opportunities'
    },
    {
        id:5,
        img:img5,
        title:'Contact to Buyers and Share your Quote for the service'
    },
    {
        id:6,
        img:img6,
        title:'Both the Parties can Connect and Make Business Leave a Feedback'
    }
]

const work = services.map((el)=>{
    return  <div className="col-lg-4 col-md-6 col-sm-12 p-0 card-work">
    <div key={el.id} className="work-card py-8 text-center">
        <img src={el.img} className='text-center' alt="" />
        <p className='text-black text-sm mt-4'>{el.title}</p>
    </div>
</div>
})

export default work;