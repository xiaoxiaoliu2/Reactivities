import { SyntheticEvent, useState } from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function ActivityList() {
    const {activityStore} = useStore();
    const {deleteActivity, activitiesByDate, loading} = activityStore;

    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }



    return (        // this component return JSX; divided(put a horizontal line in between each activity); parse activity as the parameter, =>后面内容（ start to style each activity）; whenever looping something in react, each of the item is gonna be duplicated on our page
        <Segment>
            <Item.Group divided>   
                {activitiesByDate.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => activityStore.selectActivity(activity.id)} floated='right' content='View' color='blue' />
                                <Button 
                                    name={activity.id}
                                    loading={loading && target === activity.id} 
                                    onClick={(e) => handleActivityDelete(e, activity.id)} 
                                    floated='right' 
                                    content='Delete' 
                                    color='red' />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}

            </Item.Group>
        </Segment>
    )  
})