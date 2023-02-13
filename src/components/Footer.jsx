import React from "react";

import { createUseStyles } from "react-jss";
import { Box, Heading, Text } from "@chakra-ui/react";

import Logo from "../assets/logo.png";
import Facebook from "../assets/fb.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/insta.png";
import useWindowSize from "../hooks/useWindowSize";

const useStyles = createUseStyles({
	footer: {
		background: "#F8F8F8",
		padding: (props) => (props.width >= 500 ? "84px 103px" : "42px 52px"),
		display: "flex",
		flexWrap: "wrap",
		alignItems: "start",
		justifyContent: "space-between",
	},
	logo: {
		marginTop: "40px",
	},
	listItem: {
		listStyle: "none",
		margin: "13px 0 8px 0",
		color: "#646874",
		fontFamily: "Source Sans Pro",
		fontStyle: "normal",
		fontWeight: "400",
		fontSize: "15px",
		lineHeight: "27px",
	},
	contact: {
		flexBasis: "22%",
	},

	"@media (max-width: 500px)": {
		logo: {
			width: "75px",
			flexBasis: "100%",
			alignSelf: "center",
			marginTop: "0",
			marginBottom: "45px",
		},

		footer: {
			flexDirection: "column",
		},
		contact: {
			flexBasis: "100%",
		},
		listItem: {
			margin: 0,
			color: "#646874",
			fontFamily: "Source Sans Pro",
			fontStyle: "normal",
			fontWeight: "400",
			fontSize: "8.76px",
			lineHeight: "35px",
		},
	},
});

const mobileSocialStyles = createUseStyles({
	mobileSocial: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	socialImages: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: "11px",
		marginBottom: "55px",
	},
});

const desktopSocialStyles = createUseStyles({
	last: {
		display: "flex",
		alignItems: "flex-end",
		flexDirection: "column",
		height: "100%",
		justifyContent: "space-between",
	},
	socialImages: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: "11px",
		marginBottom: "102px",
	},
});

const MobileSocial = () => {
	const classes = mobileSocialStyles();
	return (
		<Box className={classes.mobileSocial}>
			<Text
				color="#828B9C"
				fontFamily="Roboto"
				fontStyle="normal"
				fontWeight={400}
				fontSize="8.76168px"
				lineHeight="32px"
			>
				© 2022 Food Truck Example
			</Text>
			<Box className={classes.socialImages}>
				<img
					style={{ marginRight: "22px", width: "12px" }}
					src={Instagram}
					alt="instagram"
				/>
				<img
					style={{ marginRight: "22px", width: "12px" }}
					src={Twitter}
					alt="twitter"
				/>
				<img style={{ height: "12px" }} src={Facebook} alt="facebook" />
			</Box>
		</Box>
	);
};

const DesktopSocial = () => {
	const classes = desktopSocialStyles();
	return (
		<div className={classes.last}>
			<div className={classes.links}>
				<Heading
					color="#0E2368"
					fontFamily="Source Sans Pro"
					fontStyle="normal"
					fontWeight="600"
					fontSize="18.8433px"
					lineHeight="27px"
				>
					Social Links
				</Heading>

				<div className={classes.socialImages}>
					<img
						style={{ marginRight: "35px" }}
						src={Instagram}
						alt="instagram"
					/>
					<img style={{ marginRight: "35px" }} src={Twitter} alt="twitter" />
					<img src={Facebook} alt="facebook" />
				</div>
			</div>
			<Text
				color="#828B9C"
				fontFamily="Source Sans Pro"
				fontStyle="normal"
				fontWeight={400}
				fontSize="14.6559px"
				lineHeight="23px"
			>
				© 2022 Food Truck Example
			</Text>
		</div>
	);
};

const Footer = () => {
	const { width } = useWindowSize();
	const classes = useStyles({ width });

	return (
		<div className={classes.footer}>
			<div className={classes.logo}>
				<img src={Logo} alt="logo" />
			</div>
			<div className={classes.contact}>
				<Heading
					color="#0E2368"
					fontFamily="Source Sans Pro"
					fontStyle="normal"
					fontWeight={600}
					fontSize={width >= 500 ? "18.8433px" : "15.77px"}
					lineHeight={width >= 500 ? "27px" : "35px"}
				>
					Contact Us
				</Heading>
				<Text
					color="#828B9C"
					fontFamily="Source Sans Pro"
					fontStyle="normal"
					fontWeight={400}
					fontSize={width >= 500 ? "14.6659px" : "8.76168px"}
					lineHeight={width >= 500 ? "23px" : "12px"}
					margin={width >= 500 && "15px 0"}
				>
					Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
					XYZ-343434
				</Text>
				<Text
					color="#828B9C"
					fontFamily="Source Sans Pro"
					fontStyle="normal"
					fontWeight={400}
					fontSize={width >= 500 ? "14.6659px" : "8.76168px"}
					lineHeight={width >= 500 ? "23px" : "29px"}
					margin={width >= 500 && "15px 0"}
				>
					example2020@gmail.com
				</Text>
				<Text
					color="#828B9C"
					fontFamily="Source Sans Pro"
					fontStyle="normal"
					fontWeight={400}
					fontSize={width >= 500 ? "14.6659px" : "8.76168px"}
					lineHeight={width >= 500 ? "23px" : "29px"}
					margin={width >= 500 ? "15px 0 0 0" : "0px 0 30px 0"}
				>
					(904) 443-0343
				</Text>
			</div>
			<div className={classes.more}>
				<Heading
					color="#0E2368"
					fontFamily="Source Sans Pro"
					fontStyle="normal"
					fontWeight={600}
					fontSize={width >= 500 ? "18.8433px" : "15.77px"}
					lineHeight={width >= 500 ? "27px" : "35px"}
				>
					More
				</Heading>
				<ul className={classes.aboutList}>
					<li className={classes.listItem}>About Us</li>
					<li className={classes.listItem}>Products</li>
					<li className={classes.listItem}>Career</li>
					<li className={classes.listItem}>Contact Us</li>
				</ul>
			</div>
			{width > 500 ? <DesktopSocial /> : <MobileSocial />}
		</div>
	);
};

export default Footer;
