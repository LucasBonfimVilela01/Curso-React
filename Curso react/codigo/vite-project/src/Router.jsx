import { Route, Routes } from "react-router-dom"
import { LayoutPadrao } from "./layout/LayoutPadrao/LayoutPadrao"
import { Inicial } from "./pages"
import { PaginaErro } from "./pages"
import { SobreNos } from "./pages"


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