import React, {useEffect, useState} from 'react';
import Card from './Card';
import Category from './Category';
import Footer from './Footer';
import Table from './Table';
import Header from './Header';
import Metrics from './Metrics';
import './Main.css'

/* Assets */
import dummy from './assets/images/product_dummy.svg';


const Main = () => {
	
	const [productosCount, setProductosCount] = useState(0)
	const [usuariosCount, setUsuariosCount] = useState(0)
	const [categoriasCount, setCategoriasCount] = useState(0)
	
	const [categorias, setCategorias] = useState([])
	const [lastproduct, setLastproduct] = useState({})
	
	// productsCount
	useEffect(() => {
		fetch("http://localhost:3001/api/products/list")
		.then(res => res.json())
		.then(productos => {
			setProductosCount(productos.meta.count)
			let categoriasArray = Object.entries(productos.meta.countByCategory)
			setCategorias(categoriasArray)
			let lastProductId = productos.data.products[0].id
			fetch('http://localhost:3001/api/products/' + lastProductId)
			.then(result =>
				result.json()
			)
			.then(product => {
				setLastproduct(product)
			})
		})
		.catch((e) => {
			console.log(e);
		})
	}, [])
	
	// usersCount
	useEffect(() => {
		fetch('http://localhost:3001/api/users/')
		.then(res => res.json())
		.then(usuariosCount => {
			setUsuariosCount(usuariosCount.meta.count)
		})
		.catch((e) => {
			console.log(e);
		})
	}, [])
	
	// categoriesCount
	useEffect(() => {
		fetch('http://localhost:3001/api/products/categories')
		.then(res => res.json())
		.then(categoriasCount => {
			setCategoriasCount(categoriasCount.meta.count)
		})
		.catch((e) => {
			console.log(e);
		})
	}, [])
			
		return (
			<div id="content-wrapper" className="d-flex flex-column">
	
				<div id="content">
	
					<Header />

					<div className="container-fluid">
						<Metrics 
							title="Motorbike Zone Metrics"
							productosCount= {productosCount}
							usuariosCount= {usuariosCount}
							categoriasCount= {categoriasCount}

						/>
						<div className="row">
							{/* Cards - prueba de childrens */}
							
							<Card
								title="Last product in Data Dase"
							>
								{/* <div className="text-center">
									<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={lastproduct.data.colors[0].Images.image} alt="dummy" />
								</div>
								<h3>{lastproduct.data.name}</h3>
								<p>{lastproduct.data.description}</p>
								<a target="_blank" rel="nofollow" href={lastproduct.meta.urlDetail}>View product detail</a> */}
							</Card>
	
							<Card 
								title="Categories in Data Base"
							>
								<div className="row">
									{categorias.map(categoria =>(
										<Category nombre={categoria[0]} cantidad={categoria[1]}/>
									))}		
								</div>	
							</Card>			
						</div>
						<Table />
							
						
							
					</div>
				</div>
	
				<Footer />
	
			</div>
		);
}
export default  Main;

