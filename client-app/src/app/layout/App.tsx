import { useEffect } from 'react'
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
// import ActivityStore from '../stores/activityStore';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {    // App component; each of our components can make use of something referred to as a react hook, the hook that we're going to use to remember things is called use-state
  const {activityStore} = useStore();
  
  useEffect(()=>{               // the hook we use to add a side effect, use axios to get activity list fromAPI
    activityStore.loadActivities();
  }, [activityStore])                      // parse the activityStore as a dependency to useEffect

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (        // 只能return一个, using JS or TS inside a JSX element
   <>
    <NavBar /> 
    <Container style={{marginTop: '7em'}}> 
      <ActivityDashboard  />
    </Container>
    
    </>
  )
}

export default observer(App);
