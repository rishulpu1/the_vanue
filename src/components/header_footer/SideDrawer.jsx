import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { scroller } from 'react-scroll';
const SideDrawer = (props)=>{
    const links = [
        {where: 'featured', value: 'To top'},
        {where: 'venueinfo', value: 'Venue Info'},
        {where: 'highlights', value: 'Highlights'},
        {where: 'pricing', value: 'Pricing'},
        {where: 'location', value: 'Location'},
    ]
    const scrollToElement = (element)=>{
        scroller.scrollTo(element,{
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        });
        props.onClose(false);
    }
    const renderItems = (item) => (
        <ListItem button onClick={()=>scrollToElement(item.where)} key={item.where} >{item.value}</ListItem>
    );
    return(
        <Drawer
            anchor='right'
            open={props.open}
            onClose={props.onClose}
        >
            <List component="nav">
                {links.map((item, idx)=> renderItems(item, idx))}
            </List>
        </Drawer>
    );
}

export default SideDrawer;