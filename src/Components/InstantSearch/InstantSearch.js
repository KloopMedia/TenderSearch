import {
	InstantSearch,
	Hits,
	SearchBox,
	Pagination,
	Highlight,
	ClearRefinements,
	RefinementList,
	Configure,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';
import Hit from "./Hit";
import {makeStyles} from "@material-ui/core";

const IndexName = "TenderBot";

const searchClient = algoliasearch('9QKFJFKAX7', '8324e01a7fe5219482d1dbb65159ab74');
const index = searchClient.initIndex(IndexName);


const useStyles = makeStyles((theme) => ({
	container: {
		display: "grid",
		margin: "0 auto",
		width: "90%",
		gridTemplateColumns: "1fr 1fr",

		textAlign: "left",
		['@media (max-width:780px)']: {
			gridTemplateColumns: "1fr",
		},
	},
	header: {
		margin: 0,
		padding: 0,
		fontFamily: "Roboto",
		fontWeight: 700,
		fontSize: 24,
		textTransform: "uppercase",
		['@media (max-width:780px)']: {
			fontSize: 22
		},
		['@media (max-width:500px)']: {
			fontSize: 20
		},
		['@media (max-width:350px)']: {
			fontSize: 19
		}
	}
}));
const MyInstantSearch = () => {
	const classes = useStyles()

	return (
		<InstantSearch searchClient={searchClient} indexName={IndexName}>
			{/*<div className={classes.container}>
				<div>
					<h2 className={classes.header}>objectID</h2>
					<RefinementList attribute="objectID"/>
				</div>
				<div>
					<h2 className={classes.header}>number</h2>
					<RefinementList attribute="number"/>
				</div>
				<div>
					<h2 className={classes.header}>status</h2>
					<RefinementList attribute="status"/>
				</div>
			</div>*/}
			<SearchBox/>
			<Hits hitComponent={Hit}/>
				<Pagination/>
		</InstantSearch>
	);
}

export default MyInstantSearch;