import { Activity } from '../../../app/models/activity';
import { Button, Item, Label, Segment } from 'semantic-ui-react';


interface Props {
    activities: Activity[];    // specify activities we are going to parse down is a type of Activity array
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({activities, selectActivity, deleteActivity}: Props) {
    return (        // this component return JSX; divided(put a horizontal line in between each activity); parse activity as the parameter, =>后面内容（ start to style each activity）; whenever looping something in react, each of the item is gonna be duplicated on our page
        <Segment>
            <Item.Group divided>   
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' content='View' color='blue' />
                                <Button onClick={() => deleteActivity(activity.id)} floated='right' content='Delete' color='red' />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}

            </Item.Group>
        </Segment>
    )  
}