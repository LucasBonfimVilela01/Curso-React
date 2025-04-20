import { Outlet } from "react-router-dom"
import { Cabecalho, Conteudo, Rodape } from "../../components"
import { useAppContext } from "../../hooks"

function LayoutPadrao() {
    const {criador} = useAppContext()

    return (
        <>
        <Cabecalho />
        <Conteudo>
            <Outlet />
         </Conteudo>
        <Rodape Criador={criador} />
        </>
    )   
}

export {LayoutPadrao}