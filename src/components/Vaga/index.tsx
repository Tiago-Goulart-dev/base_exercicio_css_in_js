import VagaEstilo from './VagaEstilo'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaEstilo>
    <li className="vaga">
      <h3 className="vagaTitulo">{props.titulo}</h3>
      <ul>
        <li>Localizacao: {props.localizacao}</li>
        <li>Senioridade: {props.nivel}</li>
        <li>Tipo de contratacao: {props.modalidade}</li>
        <li>
          Salário: {props.salarioMin} - {props.salarioMax}
        </li>
        <li>Requisitos: {props.requisitos.join(', ')}</li>
      </ul>
      <a className="vagaLink" href="#">
        Ver detalhes e candidatar-se
      </a>
    </li>
  </VagaEstilo>
)

export default Vaga
