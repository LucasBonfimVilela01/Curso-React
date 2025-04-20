import style from './TituloCentral.module.css'

function TituloCentral(props) {
    const { TextoTitulo } = props
    const { TextoSubTitulo} = props

    return (
        <div className={style.TituloCentral}>
            <h1>{TextoTitulo}</h1>
            <h2>{TextoSubTitulo}</h2>
        </div>
    )
}

export {TituloCentral}