
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default function NavBar() {      // NavBar component; create react component, which is just functions that return JSX; take this component and add it to our App component
    const {activityStore} = useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button onClick={() => activityStore.openForm()} positive content='Create Activity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}