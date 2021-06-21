import {connectHighlight} from 'react-instantsearch-dom';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
	section: {
		borderRadius: 10,
		elevation: 30,
		backgroundColor: "#fafafa"
	},
	container: {
		display: "flex",
		flexDirection: "row"

	}
}));

const Highlight = ({highlight, attribute, hit}) => {
	const parsedHit = highlight({
		highlightProperty: '_highlightResult',
		attribute,
		hit,
	});


	return (
		<span>
			{parsedHit.map(
				(part, index) =>
					part.isHighlighted ? (
						<mark key={index}>{part.value}</mark>
					) : (
						<span key={index}>{part.value}</span>
					)
			)}
    </span>
	);
};

const CustomHighlight = connectHighlight(Highlight);

const Hit = ({hit}) => {
	const classes = useStyles();
	const keys = Object.keys(hit);
	return (
		<div style={{margin: 10, textAlign: "start"}}>
				{/*<table  style="key-value-table  ux-light-table" summary="Example of a key value table.">*/}
				<table style={{borderCollapse: "collapse", width:"100%", border: "1px solid black"}} summary="Example of a key value table.">
					<thead>
					<tr>
						<th scope="col">Key</th>
						<th scope="col">Value</th>
					</tr>
					</thead>
					<tbody>
					{
						keys.map(key => {
							return (

								<tr style={{border: "1px solid black"}}>
									<th style={{padding: 5,border: "1px solid black"}} className="width-20">{key}</th>
									<td  scope="row" ><CustomHighlight hit={hit} attribute={key}/></td>
								</tr>
							)
						})
					}
					</tbody>
				</table>
		</div>
	)
};

export default Hit;