import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import axios from "axios";

const Crypto = ()=>{
	const [search, setSearch] = useState('');
	const [info, setInfo] = useState([]);

	const hSearch = (event)=>{setSearch(event.target.value)}
	const finfo = info.filter(c=>c.name.toLowerCase().includes(search.toLowerCase()))

	useEffect(()=>{
		let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR";
		axios.get(url)
		.then(res=>setInfo(res.data))
		.catch(err=>{console.log("Issue is : ", +err)});
	},[])
	return(
	<>
	<h1>Crypto Prices Application</h1>
		<form>
			<input type = "search" placeholder = "Enter text here" onChange = {hSearch}/><br/><br/>
		</form>

		<Table striped bordered hover>
			<thead>
				<tr>	
					<th>Name</th>
					<th>Symbol</th>
					<th>Images</th>
					<th>Prices</th>
					<th>All Time High</th>
					<th>All Time Low</th>
				</tr>
			</thead>
			<tbody>
			{finfo.map((e) => (
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.symbol}</td>
                            <td><img src={e.image} alt={e.name} style={{ width: '50px' }} /></td>
                            <td>{e.current_price}</td>
                            <td>{e.ath}</td>
                            <td>{e.atl}</td>
                        </tr>
                    ))}

			</tbody>
		</Table>
	</>
	)
}

export default Crypto