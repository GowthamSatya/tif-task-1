import React from "react";

import { Heading, Text, Button, Box } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";

import AboutImg from "../assets/about.png";
import useWindowSize from "../hooks/useWindowSize";

const useStyles = createUseStyles({
	about: {
		padding: (props) => (props.width > 1024 ? "0 205px" : "140px 50px"),
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: (props) => props.width > 1000 && "165px",
		width: "100%",
		background:
			"linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)",
	},
	aboutDetails: {
		display: "flex",
		flexDirection: "column",
		alignItems: (props) => (props.width > 1024 ? "start" : "center"),
		flexBasis: (props) => props.width > 1024 && "40%",
	},
	explore: {
		padding: "14px 35px",
		width: "132px",
		height: "42px",
		lineHeight: "36px",
	},
});

const About = () => {
	const { width } = useWindowSize();
	const classes = useStyles({ width });

	return (
		<Box className={classes.about}>
			{width > 1024 && (
				<div className={classes.aboutImg}>
					<img src={AboutImg} alt="about" />
				</div>
			)}
			<Box className={classes.aboutDetails}>
				<Heading
					color="#0E2368"
					fontSize="45px"
					fontWeight="600"
					lineHeight="27px"
					fontFamily="Poppins"
				>
					About Us
				</Heading>
				<Text
					fontSize="15px"
					color="#444957"
					fontWeight="400"
					lineHeight="27px"
					margin={width > 1024 ? "25px 0" : "21px 0 16px 0"}
					textAlign={width < 1024 && "center"}
				>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. t has survived not only
					five centuries.
				</Text>
				<Button
					borderRadius="100px"
					color="#fff"
					bg="#E23744"
					fontSize="16px"
					className={classes.explore}
				>
					Read More
				</Button>
			</Box>
		</Box>
	);
};

export default About;
