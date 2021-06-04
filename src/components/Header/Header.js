import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { UserContext } from '../../App';
import './Header.css';

// these are for left drawer
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider'; // i will use it in the future
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// these are for icon 
import men from '../../images/men.png';
import women from '../../images/women.png';
import jewellery from '../../images/jewellery.png';
import electronics from '../../images/electronics.png';
import { useHistory } from 'react-router-dom';


const useStylesBar = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: '10px',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 1),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 60, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function Header() {
    const classesBar = useStylesBar();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const categoryType = [
        { name: women, funcName: 'womenClothing' },
        { name: men, funcName: 'menClothing' },
        { name: jewellery, funcName: 'jewellery'},
        { name: electronics, funcName: 'electronics'},
    ]

    const history = useHistory();

    const drawerButton = funcName =>{
        console.log(funcName);
        history.push(`/${funcName}`);
    }

    

    const list = (anchor) => (
        <div
            className={clsx(classesBar.list, {
                [classesBar.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="d-flex">
                <h4 style={{ paddingLeft: "20px", paddingTop: "20px" }}>Category</h4>
                <button className="closeButton">X</button>
            </div>

            <List>
                {['Women Clothing', "Men Clothing", "Jewellery", "Electronics"].map((text, index) => (
                    <ListItem button onClick={() =>drawerButton(categoryType[index].funcName)} key={index}>
                        <img style={{ width: "30px", paddingRight: "10px" }} src={categoryType[index].name} alt="" />
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            {/* <Divider /> // i will use it the future

            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );


    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    // const handleDrawer = (event) => {
    //     setDrawer(true)
    //     console.log("Clicking....", drawer);
    // }


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Sign In</MenuItem>
            <MenuItem onClick={handleMenuClose}>Orders History</MenuItem>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >


            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircleIcon />
                </IconButton>
                <p>Your profile</p>
            </MenuItem>

        </Menu>
    );

    // const [drawer, setDrawer] = useContext(UserContext);

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>

                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer('left', true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <React.Fragment key={"left"}>
                        <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
                            {list("left")}
                        </Drawer>
                    </React.Fragment>

                    <Typography             // Company name
                        className={classes.title} variant="h5" noWrap>
                        Jobeda Shop
                    </Typography>

                    <div className={classes.search} style={{ marginLeft: "200px", width: "700px" }}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase          // search input
                            placeholder="Search in Jobeda Shop"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>

                        <IconButton aria-label="" color="inherit">
                            <Badge badgeContent={1} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen} // Here will be added drawer
                            color="inherit"
                        >
                            <AccountCircleIcon />
                        </IconButton>
                    </div>

                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
