import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
const SideDrawer = (props)=>{
    const links = [
        {where: 'featured', value: 'To top'},
        {where: 'venueinfo', value: 'Venue Info'},
        {where: 'highlights', value: 'Highlights'},
        {where: 'pricing', value: 'Pricing'},
        {where: 'location', value: 'Location'},
    ]
    const renderItems = (item) => (
        <ListItem button onClick={()=>{alert(item.where)}} >{item.value}</ListItem>
    );
    return(
        <Drawer
            anchor='right'
            open={props.open}
            onClose={props.onClose}
        >
            <List component="nav">
                {links.map((item)=> renderItems(item))}
            </List>
        </Drawer>
    );
}

export default SideDrawer;