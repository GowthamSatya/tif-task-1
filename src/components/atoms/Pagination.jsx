import React from "react";

import { createUseStyles } from "react-jss";
import { Text, Box } from "@chakra-ui/react";

import { usePagination, DOTS } from "../../hooks/usePagination";
import Front from "../../assets/front.png";
import useWindowSize from "../../hooks/useWindowSize";

const useStyles = createUseStyles({
	paginationContainer: {
		display: "flex",
		listStyleType: "none",
		margin: "64px 0",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	paginationBox: {
		display: "flex",
		alignItems: "center",
	},

	paginationItem: {
		border: "1px solid black",
		padding: "7px 6px",
		width: "28px",
		height: "28px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "5px",
		margin: "0 14px",
	},

	disabled: {
		pointerEvents: "none",
	},

	arrowLeft: {
		transform: "rotate(180deg)",
		width: "160px",
	},

	arrowRight: {
		transform: "rotate(-45deg)",
		border: "solid black",
		borderWidth: "0 3px 3px 0",
		display: "inline-block",
		padding: "3px",
	},

	"@media (max-width:500px)": {
		paginationContainer: {
			margin: "0 0 57px 0",
		},

		paginationItem: {
			border: "1px solid black",
			width: "16px",
			height: "16px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			borderRadius: "5px",
			margin: "0 7px",
			padding: "3px",
		},
	},
});

const Pagination = (props) => {
	const classes = useStyles();
	const { width } = useWindowSize();
	const isMobile = width <= 500;

	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
	} = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	// If there are less than 2 times in pagination range we shall not render the component
	if (currentPage === 0 || paginationRange.length < 2) return null;

	const onNext = () => onPageChange(currentPage + 1);

	const onPrevious = () => onPageChange(currentPage - 1);

	return (
		<Box className={classes.paginationContainer}>
			{/* Left navigation arrow */}
			<Box className={classes.paginationBox}>
				<button
					disabled={currentPage == 1}
					className={classes.paginationItem}
					onClick={onPrevious}
				>
					<img src={Front} className={classes.arrowLeft} />
				</button>

				<Text
					fontSize={isMobile ? "12px" : "22px"}
					fontWeight={400}
					fontFamily="Source Sans Pro"
					lineHeight="27px"
				>
					{currentPage}/{totalCount / pageSize}
				</Text>

				{/*  Right Navigation arrow */}
				<button
					disabled={currentPage == 2}
					className={classes.paginationItem}
					onClick={onNext}
				>
					<img src={Front} />
				</button>
			</Box>
		</Box>
	);
};

export default Pagination;
