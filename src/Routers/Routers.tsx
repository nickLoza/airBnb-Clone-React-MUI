import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"


const Home = lazy(()=> import("../pages/Home"))
const Search = lazy(()=> import("../pages/Search"))
const Rooms = lazy(()=> import("../pages/Rooms"))

function Routers() {

	return (
		<Suspense>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/search/:place/:dateFrom/:dateTo/:travelers" element={<Search />}/>
				<Route path="/rooms/:id" element={<Rooms />}/>
			</Routes>
		</Suspense>
	)
}

export default Routers