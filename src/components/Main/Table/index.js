import React from 'react';

const Table = ({productos,productPage}) => {
	
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
									<th>Link</th>
								</tr>
							</thead>
							<tbody>
								{
									productos.map((producto) => (
										<tr key={producto.id}>
											<td>{producto.id}</td>
											<td>{producto.name}</td>
											<td>{producto.description}</td>
											<td>{producto.brand}</td>
											<td>{producto.detail}</td>
										</tr>
									))
								}
								
							</tbody>
							<a href={productPage[0]}>Previous</a>
							<a href={productPage[1]}>Next</a>
						</table>
					</div>
				</div>
			</div>
        </>
    );
}

export default Table;
