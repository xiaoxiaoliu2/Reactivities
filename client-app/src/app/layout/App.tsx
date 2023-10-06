import { useEffect, useState } from 'react'
import axios from 'axios';
import { Container} from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid';

function App() {    // App component; each of our components can make use of something referred to as a react hook, the hook that we're going to use to remember things is called use-state
  const [activities, setActivities] = useState<Activity[]>([]);   // request goes to our API to get the data so that we can then store it in the States, once we have it inside our state, we can then use it to display inside our component
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  
  useEffect(()=>{               // the hook we use to add a side effect
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
        setActivities(response.data)
      })
  }, [])                      
  
  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    activity.id
      ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, {...activity, id: uuid()}]);
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter(x => x.id !== id)])
  }

  return (        // 只能return一个, using JS or TS inside a JSX element
   <>
    <NavBar openForm={handleFormOpen} /> 
    <Container style={{marginTop: '7em'}}>      
      <ActivityDashboard 
      activities={activities} 
      selectedActivity={selectedActivity}
      selectActivity={handleSelectActivity}
      cancelSelectActivity={handleCancelSelectActivity}
      editMode={editMode}
      openForm={handleFormOpen}
      closeForm={handleFormClose}
      createOrEdit={handleCreateOrEditActivity}
      deleteActivity={handleDeleteActivity}
      />
    </Container>
    
    </>
  )
}

export default App
