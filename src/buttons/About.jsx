import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {UncontrolledCarousel} from 'reactstrap'

const About = () => {
  return (
    <div>
      <h1>About us</h1>


    <UncontrolledCarousel className='img'
  items={[
    {
      altText: 'Slide 1',
     // caption: 'Slide 1',
      key: 1,
      src: 'https://images.pexels.com/photos/4114739/pexels-photo-4114739.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
      //
    },
    {
      altText: 'Slide 2',
     // caption: 'Slide 2',
      key: 2,
      src: 'https://images.pexels.com/photos/3992391/pexels-photo-3992391.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
      altText: 'Slide 3',
      //caption: 'Slide 3',
      key: 3,
      src: 'https://images.pexels.com/photos/3756050/pexels-photo-3756050.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
      altText: 'Slide 4',
      //caption: 'Slide 4',
      key: 4,
      src: 'https://images.pexels.com/photos/221063/pexels-photo-221063.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300'
    },
    {
      altText: 'Slide 5',
     // caption: 'Slide 5',
      key: 5,
      src: 'https://images.pexels.com/photos/3593428/pexels-photo-3593428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300'
    },
    {
      altText: 'Slide 6',
     // caption: 'Slide 5',
      key: 6,
      src: 'https://images.pexels.com/photos/236804/pexels-photo-236804.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    
  ]}
 />
 <h2>Our journey...</h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ipsam quae commodi consequuntur a? Earum facere totam quidem dolores inventore ipsa quam qui suscipit dolore ut!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ipsam quae commodi consequuntur a? Earum facere totam quidem dolores inventore ipsa quam qui suscipit dolore ut!
</p>
 </div>

  )
}

export default About