
import { Button, Container, Menu } from 'semantic-ui-react';

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {      // NavBar component; create react component, which is just functions that return JSX; take this component and add it to our App component
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button onClick={openForm} positive content='Create Activity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}