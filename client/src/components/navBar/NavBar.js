import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AccountThumbnail from "../AccountThumbnail/AccountThumbnail";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	InputBase,
	Badge,
	MenuItem,
	Menu,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";

import MoreIcon from "@material-ui/icons/MoreVert";
import Background from "../../images/WaveFlip.png";
import AuthenticationButton from "../AuthenticationButton/AuthenticationButton";

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
}));

function NavBar() {
	// * Set up loginWithRedirect
	const { loginWithRedirect } = useAuth0();

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

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		window.location.href = "http://localhost:3000/search";
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}>
			<MenuItem>
				<Link
					to="/home"
					style={{
						color: "#3d1347",
						margin: "5px",
						marginTop: "10%",
					}}>
					Home
				</Link>
			</MenuItem>
			<MenuItem>
				<AuthenticationButton style={{ color: "#3d1347" }} />
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit">
					<AccountCircle />
				</IconButton>
				<p style={{ color: "#3d1347" }}>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position="sticky">
				<Toolbar
					style={{
						backgroundImage: `url(${Background})`,
						backgroundRepeat: `no-repeat`,
						backgroundSize: `cover`,
						backgroundPosition: `center center`,
					}}>
					<Link
						to="/landing"
						style={{ color: "white", textDecoration: "none" }}>
						<Typography className={classes.title} variant="h6" noWrap>
							WavMovers
						</Typography>
					</Link>
					<div className={classes.search}>
						<form onSubmit={onSubmit}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ "aria-label": "search" }}
							/>
						</form>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<Link
							to="/home"
							style={{
								color: "pink",
								margin: "5px",
								marginTop: "9%",
								textDecoration: "none",
							}}>
							Home
						</Link>
						<AuthenticationButton />
						<Link
							to="/upload"
							style={{
								color: "pink",
								margin: "5px",
								marginTop: "9%",
								textDecoration: "none",
							}}>
							Upload
						</Link>
						<Link
							to="/education"
							style={{
								color: "pink",
								margin: "5px",
								marginTop: "9%",
								textDecoration: "none",
							}}>
							Free Resources
						</Link>
						<Link
							to="/lessons"
							style={{
								color: "pink",
								margin: "5px",
								marginTop: "9%",
								textDecoration: "none",
							}}>
							Lessons
						</Link>
						{/* <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit">
							<AccountThumbnail />
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit">
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	);
}

export default NavBar;
