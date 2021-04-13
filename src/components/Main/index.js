import React, {useEffect, useState} from 'react';
import Card from './Card';
import Category from './Category';
import Footer from './Footer';
import Table from './Table';
import Header from './Header';
import Metrics from './Metrics';


const Main = () => {
	
	const [productosCount, setProductosCount] = useState(0)
	const [usuariosCount, setUsuariosCount] = useState(0)
	const [categoriasCount, setCategoriasCount] = useState(0)
	const [categorias, setCategorias] = useState([])
	const [lastproduct, setLastproduct] = useState({})
	
	useEffect(() => {
		fetch("http://localhost:3001/api/products/list")
		.then(res => res.json())
		.then(productos => {
			setProductosCount(productos.meta.count)
			let categoriasArray = Object.entries(productos.meta.countByCategory)
			setCategorias(categoriasArray)
			setLastproduct(productos.data.products[0])
			setCategoriasCount(categoriasArray.length)
			fetch('http://localhost:3001/api/users/')
			.then(res => res.json())
			.then(usuariosCount => {
				setUsuariosCount(usuariosCount.meta.count)
			})
			.catch((e) => {
				console.log(e);
			})
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
						<Card
							title="Last product in Data Dase"
						>
							<div className="text-center">
								<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={lastproduct.image} alt="lastProduct" />
							</div>
							<h3>{lastproduct.name}</h3>
							<p>{lastproduct.description}</p>
							<a target="_blank" rel="nofollow" href={lastproduct.detail}>View product detail</a>
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

