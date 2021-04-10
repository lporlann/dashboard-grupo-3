import React, {useEffect, useState} from 'react';
import Card from './Card';
import Category from './Category';
import Footer from './Footer';
import Table from './Table';
import Header from './Header';
import Metrics from './Metrics';

/* Assets */
import dummy from './assets/images/product_dummy.svg';


const Main = () => {
	const [productos, setProductos] = useState(0)
	const [usuarios, setUsuarios] = useState(0)
	const [categorias, setCategorias] = useState(0)
	const [data, setData] = useState([])
	
	useEffect(() => {
		fetch('http://localhost:3001/api/products/list')
			.then(res => res.json())
			.then(productos => {
				setProductos(productos.meta.count)
			})
			.catch((e) => {
				console.log(e);
			})
	}, [productos])
	
	useEffect(() => {
		fetch('http://localhost:3001/api/users/')
			.then(res => res.json())
			.then(usuarios => {
				setUsuarios(usuarios.meta.count)
			})
			.catch((e) => {
				console.log(e);
			})
	}, [productos])
	
	useEffect(() => {
		fetch('http://localhost:3001/api/products/categories')
			.then(res => res.json())
			.then(categorias => {
				setCategorias(categorias.meta.count)
			})
			.catch((e) => {
				console.log(e);
			})
	}, [productos])

		return (
			<div id="content-wrapper" className="d-flex flex-column">
	
				<div id="content">
	
					<Header />

					<div className="container-fluid">
						<Metrics 
							title="Motorbike Zone Metrics"
							productos= {productos}
							usuarios= {usuarios}
							categorias= {categorias}

						/>
						<div className="row">
							{/* Cards - prueba de childrens */}
							
							<Card
								title="Last product in Data Dase"
							>
								<div className="text-center">
									<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={dummy} alt="dummy" />
								</div>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
								<a target="_blank" rel="nofollow" href="/">View product detail</a>
							</Card>
	
							<Card 
								title="Categories in Data Base"
							>
								<div className="row">
									<Category />
									<Category />
									<Category />
									<Category />
									<Category />
									<Category />
								</div>
							</Card>
							
						</div>
						<Table 
							data={data}
						/>
					</div>
				</div>
	
				<Footer />
	
			</div>
		);
}

export default Main;
