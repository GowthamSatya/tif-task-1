import React from "react";

import { Heading, Button, Text, Box } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";

import Curve from "../assets/Vector.png";
import Logo from "../assets/logo.png";
import PizzaImg from "../assets/pizza.png";
import useWindowSize from "../hooks/useWindowSize";

const useStyles = createUseStyles({
	home: {
		padding: "33px 100px 0 100px",
	},
	corner: {
		position: "absolute",
		height: "auto",
		top: 0,
		right: 0,
	},
	vector_curve: {
		position: "absolute",
		zIndex: 1,
		top: 0,
		right: 0,
	},
	logoImg: {
		width: "107px",
	},
	mainContainer: {
		width: "365px",
		marginTop: "111px",
	},
	best: {
		color: "#E23744",
		fontWeight: 700,
	},
	mainText: {
		color: "#0E2368",
		fontWeight: 700,
		fontFamily: "Source Sans Pro",
		fontStyle: "normal",
		lineHeight: "69px",
	},
	explore: {
		padding: "14px 35px",
		width: "190px",
		height: "63px",
		margin: "15px 0 185px 0",
	},
	"@media (max-width: 500px)": {
		home: {
			padding: "63px",
		},

		mainContainer: {
			width: "auto",
			marginTop: "490px",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
		mainText: {
			lineHeight: "46px",
			width: "240px",
			textAlign: "center",
		},
		explore: {
			padding: "14px 35px",
			width: "120px",
			fontSize: "12.6px",
			lineHeight: "32px",
			height: "40px",
			margin: "0",
		},
	},
});

const Home = () => {
	const { width } = useWindowSize();
	const isMobile = width <= 500;
	const classes = useStyles({ width });

	return (
		<Box className={classes.home}>
			<Box>
				{(width > 1100 || width < 500) && (
					<img src={PizzaImg} alt="pizza" className={classes.corner} />
				)}
				<img src={Curve} alt="curve" className={classes.vector_curve} />
				<Button
					borderRadius="20px"
					width={isMobile ? "88px" : "122px"}
					height={isMobile ? "32px" : "42px"}
					padding={isMobile ? "1px 3px" : "3px 15px"}
					fontSize={isMobile ? "11px" : "16px"}
					variant="outline"
					colorScheme="white"
					color="white"
					position="absolute"
					zIndex={10}
					top={isMobile ? "20px" : "32px"}
					right={isMobile ? "31px" : "41px"}
				>
					Get In Touch
				</Button>
			</Box>
			{width >= 1200 && (
				<img className={classes.logoImg} src={Logo} alt="logo" />
			)}
			<Box direction="column" className={classes.mainContainer}>
				<Heading
					fontSize={isMobile ? "38px" : "62px"}
					className={classes.mainText}
				>
					Discover the
					<span className={classes.best}> Best</span> Food and Drinks
				</Heading>
				<Text
					fontWeight="400"
					fontSize={isMobile ? "11px" : "17px"}
					color="#444957"
					lineHeight={isMobile ? "18px" : "27px"}
					margin="26px 0"
					width={isMobile && "238px"}
					textAlign={isMobile && "center"}
				>
					Naturally made Healthcare Products for the better care & support of
					your body.
				</Text>
				<Button
					borderRadius="100px"
					color="#fff"
					bg="#E23744"
					fontSize="18px"
					className={classes.explore}
				>
					Explore Now!
				</Button>
			</Box>
		</Box>
	);
};

export default Home;
