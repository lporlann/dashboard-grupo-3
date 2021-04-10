import React from 'react';
import Card from './Card';

const Metrics = ({title, productosCount, usuariosCount, categoriasCount}) => {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">{title}</h1>
			</div>

			<div className="row">

				<Card 
                    border="primary"
                    text="primary"
                    icon="fas fa-barcode"
                    title="Cantidad de Productos"
                    value={productosCount}
                />
                <Card 
                    border="success"
                    text="success"
                    icon="fas fa-user-check"
                    title="Cantidad de usuarios"
                    value={usuariosCount}
                />
                <Card 
                    border="warning"
                    text="warning"
                    icon="fas fa-clipboard-list"
                    title="Cantidad de categorias"
                    value={categoriasCount}
                />
			</div>
        </>
    );
}

export default Metrics;
