import {makeStyles} from "@material-ui/core";
import ReactJsonPrint from 'react-json-print'

const useStyles = makeStyles((theme) => ({
	link: {
		margin: 0,
		padding: "15px 0 5px 0 ",
		fontFamily: "Roboto",
		fontWeight: 300,
		fontSize: 20,
		textTransform: "uppercase",
		['@media (max-width:780px)']: {
			fontSize: 18
		},
		['@media (max-width:500px)']: {
			fontSize: 16
		},
		['@media (max-width:350px)']: {
			fontSize: 15
		}
	},
	preStyle: {
		display: 'block',
		margin: '0',
		overflow: 'scroll',
	},
}));


const Hit = (props) => {
	const classes = useStyles()
	const JSONPrettyMon = require('react-json-pretty/dist/monikai');
	let item = props.hit
	console.log(item)

	return (
		<div style={{paddingTop: 50, textAlign: "left"}}>
			<ReactJsonPrint dataObject={item}/>
		</div>
	);
}

export default Hit;