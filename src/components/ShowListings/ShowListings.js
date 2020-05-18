import React, { Component } from 'react';
import ReactTable from 'react-table';
import './ShowListings.css';

class ShowListings extends Component {
	constructor(props) {
		super();
		this.state = {
			region: 'east bay',
			data: [],
			retrieved: false
		}
	}

	loadListings = () => {
		 	fetch('http://localhost:3002/showlistings/' + this.state.region, {
				method: 'get',
				headers: {'Content-Type': 'application/json'}
			})
			.then(response => response.json())
			.then(resp => this.setState({data: resp }))
			.catch((err) => {console.log(err)})
			this.setState({ retrieved: true })
	}

	render() {
		  const columns = [
		  {
   		 	Header: 'bands',
  			accessor: 'bands' // String-based value accessors!
  		  }, 
  		  {
    		Header: 'venue',
    		accessor: 'venue',
    		//Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  			} 
  		/*{
    		id: 'friendName', // Required because our accessor is not a string
    		Header: 'Friend Name',
    		accessor: d => d.friend.name // Custom value accessors!
  		}, 
  		{
    		Header: props => <span>Friend Age</span>, // Custom header components!
    		accessor: 'friend.age'
  		}*/
  		]
		return (
			<div>
				{ this.state.retrieved === false 
					? <div> {this.loadListings()}</div>
					: <div></div>
				}
				 <ul>
 					{this.state.data.map(item => (
 						<li  key={item.id}>{item.bands} at {item.venue} in {item.city}</li>
 					))}
 				</ul>
				
				
			</div>
		)
	}
}



export default ShowListings;

// <p 
// 					onClick = {this.loadListings}> 
// 					refresh show listings 
// 				</p>



// <ReactTable
// 					data={this.state.data}
// 					columns={columns}
// 				/>