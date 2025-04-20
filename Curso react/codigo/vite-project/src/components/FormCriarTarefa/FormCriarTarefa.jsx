import { useState } from "react"
import { Botao, TIPO_BOTAO } from "../Botao"
import { CampoTexto } from "../CampoTexto"

import style from "./FormCriarTarefa.module.css"
import { useAppContext } from "../../hooks"

function FormCriarTarefa() {
    const { adicionarTarefa } = useAppContext()

    const [nomeTarefa, setNomeTarefa] = useState('')

    function onChanceNomeTarefa(event) {
        setNomeTarefa(event.currentTarget.value)
    }

    function submeterFormulario(event) {
        event.preventDefault()

        if (!nomeTarefa) {
            return
        }

        adicionarTarefa(nomeTarefa)

        setNomeTarefa('')
    }

    return (
        <form className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
            <CampoTexto value={nomeTarefa} onChange={onChanceNomeTarefa}/>
            <Botao texto="+"/>
        </form>
    )
}

export {FormCriarTarefa}