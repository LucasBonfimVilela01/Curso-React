import { Route, Routes } from "react-router-dom"
import { Inicial, PaginaErro, SobreNos } from "./pages"
import { LayoutPadrao } from "./layout/LayoutPadrao/LayoutPadrao"

function Router() {

    return (
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
                <Route path="/" element={<Inicial />} />
                <Route path="SobreNos" element={<SobreNos />} />
                <Route path="*" element={<PaginaErro />} />
            </Route>
        </Routes>
    )
}
export { Router }