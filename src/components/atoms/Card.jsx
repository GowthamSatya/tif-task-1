import React from "react";
import {
	Heading,
	Text,
	Button,
	Card,
	Stack,
	Image,
	CardBody,
	CardFooter,
} from "@chakra-ui/react";
import useWindowSize from "../../hooks/useWindowSize";

const ArticleCard = ({ imgSrc, title, desc }) => {
	const { width } = useWindowSize();
	const isMobile = width <= 500;
	return (
		<Card
			width={!isMobile ? "381px" : "271px"}
			boxShadow="none"
			border={
				!isMobile
					? "1.37039px solid rgba(147, 162, 211, 0.38)"
					: "0.876168px solid #373737;"
			}
			padding={isMobile ? "40px 19px" : "27px"}
			borderRadius={isMobile ? "26px" : "20px"}
			marginBottom={width <= 1000 && "61px"}
			display={isMobile && "flex"}
			alignItems={isMobile && "center"}
		>
			<CardBody padding="0">
				<Image
					padding={isMobile && "0 15px"}
					src={imgSrc}
					borderRadius="lg"
					alt="article_img"
				/>
				<Stack
					padding={!isMobile && "15px"}
					alignItems={isMobile ? "center" : "start"}
					marginTop="23px"
				>
					<Heading
						color="#0E2368"
						fontFamily="Poppins"
						fontWeight="700"
						fontSize={isMobile ? "16px" : "21px"}
						lineHeight={isMobile ? "35px" : "27px"}
					>
						{title}
					</Heading>
					<Text
						color="#444957"
						fontWeight="400"
						lineHeight={isMobile ? "22px" : "27px"}
						fontSize={isMobile ? "10px" : "15px"}
						fontFamily={isMobile ? "Source Sans Pro" : "Open Sans"}
						margin={"14px 0"}
						letterSpacing="-0.01em"
						padding={isMobile ? "0 12px" : ""}
					>
						{desc}
					</Text>
				</Stack>
			</CardBody>
			<CardFooter padding="0">
				<Button
					color="#424961"
					bg="transparent"
					border={!isMobile ? "1.37039px solid #424961" : "2px solid #424961;"}
					borderRadius="20px"
					fontSize={isMobile ? "11px" : "16.667px"}
					lineHeight={isMobile ? "26px" : "37px"}
					fontWeight="600"
					padding={isMobile ? "0 30px" : "11px 25px 10px 24px"}
					marginTop={isMobile && "26px"}
					marginLeft={!isMobile && "13px"}
				>
					Read More
				</Button>
			</CardFooter>
		</Card>
	);
};

export default ArticleCard;
