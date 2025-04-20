import style from './Rodape.module.css'

function Rodape(props) {
    const { Criador } = props
    const anoAtual = new Date().getFullYear()

    return (
        <div className={style.Rodape}>
            <span>React Básico </span>
            -
            <span> {anoAtual} </span>
            -
            <span> {Criador}</span>           
        </div>
    )
}

export {Rodape} 