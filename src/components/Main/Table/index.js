import React from 'react';

const Table = (props) => {
	
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
									props.productos.map((producto) => (
										<tr key={producto.id}>
											<td>{producto.id}</td>
											<td> <a href={producto.detail} target="blanck">{producto.name}</a></td>
											<td>{producto.description}</td>
											<td>{producto.brand}</td>
										</tr>
									))
								}
							</tbody>
							{props.children}
						</table>
					</div>
				</div>
			</div>
        </>
    );
}

export default Table;
