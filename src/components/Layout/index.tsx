import { Container } from "@mui/material"
import Routers from "../../Routers/Routers"
import Footer from "../Footer"
import Header from "../Header"

function index() {
	return (
		<>
			<Header/>
			<Container sx={{
				mt: "6rem",
				minHeight: "100vh"
			}}>
				<Routers/>
			</Container>
			<Footer/>
		</>
	)
}

export default index