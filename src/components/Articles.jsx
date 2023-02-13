import React, { useState, useMemo } from "react";

import { createUseStyles } from "react-jss";
import { Heading, Box } from "@chakra-ui/react";

import { articleData } from "../constants/data.js";

import useWindowSize from "../hooks/useWindowSize";
import Pagination from "./atoms/Pagination";
import ArticleCard from "./atoms/Card";

const useStyles = createUseStyles({
	articles: {
		padding: "158px 108px 0 108px",
	},
	articleData: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	"@media (max-width:1000px)": {
		articles: {
			padding: "132px 52px 0 52px",
		},
		articleData: {
			flexDirection: "column",
		},
	},
});

const RenderArticles = ({ currentItems }) => {
	const width = useWindowSize();
	const classes = useStyles({ width });
	return (
		<Box className={classes.articleData}>
			{currentItems?.map((article) => {
				return (
					<ArticleCard
						imgSrc={article.imgSrc}
						title={article.title}
						desc={article.desc}
						key={article.id}
					/>
				);
			})}
		</Box>
	);
};

const Paginator = ({ itemsPerPage }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * itemsPerPage;
		const lastPageIndex = firstPageIndex + itemsPerPage;
		return articleData.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	return (
		<>
			<RenderArticles currentItems={currentTableData} />
			<Pagination
				className="pagination-bar"
				currentPage={currentPage}
				totalCount={articleData.length}
				pageSize={itemsPerPage}
				onPageChange={(page) => setCurrentPage(page)}
			/>
		</>
	);
};

const Articles = () => {
	const { width } = useWindowSize();
	const classes = useStyles({ width });

	return (
		<Box className={classes.articles}>
			<Box className={classes.heading}>
				<Heading
					fontSize={width <= 500 ? "28px" : "56px"}
					fontWeight="600"
					fontFamily="Source Sans Pro"
					lineHeight={width <= 500 ? "54px" : "62px"}
					color="#0E2368"
					letterSpacing="0.04em"
					marginBottom={width <= 500 ? "23px" : "42px"}
				>
					Latest Articles
				</Heading>
			</Box>

			<Paginator itemsPerPage={3} />
		</Box>
	);
};

export default Articles;
