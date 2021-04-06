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
	Tooltip,
	TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import Background from "../../images/WaveFlip.png";
import UserMenu from "../UserMenu/UserMenu";
import AuthenticationButton from "../AuthenticationButton/AuthenticationButton";
import AuthenticationButtonIcon from "../AuthenticationButtonIcon/AuthenticationButtonIcon";
import HomeIcon from "@material-ui/icons/Home";
import PublishIcon from "@material-ui/icons/Publish";
import BookIcon from "@material-ui/icons/Book";
import EventIcon from "@material-ui/icons/Event";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useHistory } from "react-router-dom";
import API from "../../utils/SearchAPI";
import { useEffect } from "react/cjs/react.development";

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
	toolbar: theme.mixins.toolbar,
}));

function NavBar() {
	const history = useHistory();
	const [query, setQuery] = React.useState("");
	// * Set up loginWithRedirect
	const { loginWithRedirect, isAuthenticated } = useAuth0();

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
		history.push({
			pathname: "/search",
			state: { query: query },
		});
		setQuery("");
	};

	const menuId = "primary-search-account-menu";
	const renderAuthMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>
				{" "}
				<Link
					to=""
					style={{
						color: "#3d1347",
						margin: "5px",
						textDecoration: "none",
					}}>
					Profile
				</Link>
			</MenuItem>
			<MenuItem onClick={handleMenuClose}>
				<Link
					to="/account"
					style={{
						color: "#3d1347",
						margin: "5px",
						textDecoration: "none",
					}}>
					Account
				</Link>
			</MenuItem>
			<MenuItem onClick={handleMenuClose}>
				<LogoutButton />
			</MenuItem>
		</Menu>
	);
	const renderUnauthMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>
				<LoginButton />
			</MenuItem>
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
					}}>
					Home
				</Link>
			</MenuItem>
			<MenuItem>
				<AuthenticationButton />
			</MenuItem>
			<MenuItem>
				<Link
					to="/education"
					style={{
						color: "violet",
						margin: "5px",
						textDecoration: "none",
					}}>
					Resources
				</Link>
			</MenuItem>
			<MenuItem>
				<Link
					to="/lessons"
					style={{
						color: "violet",
						margin: "5px",
						textDecoration: "none",
					}}>
					Lessons
				</Link>
			</MenuItem>
			<MenuItem>
				<Link
					to="/upload"
					style={{
						color: "violet",
						margin: "5px",
						textDecoration: "none",
					}}>
					Upload
				</Link>
			</MenuItem>
			<MenuItem>
				<Link
					to="/about"
					style={{
						color: "violet",
						margin: "5px",
						textDecoration: "none",
					}}>
					About
				</Link>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				{/* <IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountThumbnail />
				</IconButton> */}
				<p style={{ color: "violet", margin: "5px" }}>User / Login</p>
			</MenuItem>
		</Menu>
	);

	return (
		<>
			<div className={(classes.grow, classes.toolbar)}>
				<AppBar>
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
									onChange={(e) => setQuery(e.target.value)}
									value={query}
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
							<Tooltip title="Home">
								<Link
									to="/home"
									style={{
										color: "violet",
										margin: "5px",
										marginTop: "7%",
										textDecoration: "none",
									}}>
									<HomeIcon />
								</Link>
							</Tooltip>
							<Tooltip title="Resources">
								<Link
									to="/education"
									style={{
										color: "violet",
										margin: "5px",
										marginTop: "7%",
										textDecoration: "none",
									}}>
									<BookIcon />
								</Link>
							</Tooltip>
							<Tooltip title="Lessons">
								<Link
									to="/lessons"
									style={{
										color: "violet",
										margin: "5px",
										marginTop: "7%",
										textDecoration: "none",
									}}>
									<EventIcon />
								</Link>
							</Tooltip>
							<Tooltip title="Upload">
								<Link
									to="/upload"
									style={{
										color: "violet",
										margin: "5px",
										marginTop: "7%",
										textDecoration: "none",
									}}>
									<PublishIcon />
								</Link>
							</Tooltip>

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
				{isAuthenticated ? renderAuthMenu : renderUnauthMenu}
			</div>
		</>
	);
}

export default NavBar;
