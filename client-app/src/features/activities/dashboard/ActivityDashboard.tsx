
import { Grid } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function ActivityDashboard(){    //destructure the activities from the props, specify the props as the type；activities destructured inside the parameters of our activity dashboard here
    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails />}
                {editMode &&
                <ActivityForm />}
            </Grid.Column>
        </Grid>
    )
})