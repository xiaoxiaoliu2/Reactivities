import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, Icon, List} from 'semantic-ui-react';


function App() {    // each of our components can make use of something referred to as a react hook, the hook that we're going to use to remember things is called use-state
  const [activities, setActivities] = useState([]);   // request goes to our API to get the data so that we can then store it in the States, once we have it inside our state, we can then use it to display inside our component
  useEffect(()=>{               // the hook we use to add a side effect
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      })
  }, [])                      
  
  return (        // 只能return一个, using JS or TS inside a JSX element
   <div>
    <Header as='h2' icon content='Reactivities' />  
    <ul>
      {activities.map((activity: any) => (
        <li key={activity.id}>
          {activity.title}
        </li>
      ))}
    </ul>
   </div>
  )
}

export default App
