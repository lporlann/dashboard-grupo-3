import React, {useState, useEffect} from 'react';

const Table = (props) => {
	
	const [url, setUrl] = useState('http://localhost:3001/api/products/list')
	const [productos, setProductos] = useState([])
	const [productPage, setProductPage] = useState([])

	useEffect(() => {
		fetch(url)
		.then(res => res.json())
		.then(productos => {
			setProductos(productos.data.products)
			setProductPage([productos.meta.previous, productos.meta.next])
			
		})
		.catch((e) => {
			console.log(e);
		})
	}, [url])
	
    return (
        <>
            <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
							<thead>
								<tr>
									<th>ID</th>
									<th>Nombre</th>
									<th>Descripción</th>
									<th>Marca</th>
								</tr>
							</thead>
							<tbody>
								{
									productos.map((producto) => (
										<tr key={producto.id}>
											<td>{producto.id}</td>
											<td> <a href={producto.detail} target="blanck">{producto.name}</a></td>
											<td>{producto.description}</td>
											<td>{producto.brand}</td>
										</tr>
									))
								}
							</tbody>
							
						</table>
						<div className="tableButtons">
							{productPage[0] !== "" && <button className="tableButton" onClick={()=> setUrl(productPage[0])}>Previous</button>}
							{productPage[1] !== "" && <button className="tableButton" onClick={()=> setUrl(productPage[1])}>Next</button>}
							</div>
					</div>
				</div>
			</div>
        </>
    );
}

export default Table;
