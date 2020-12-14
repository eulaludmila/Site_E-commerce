import { GroupInput } from './styled'

const Input = (props) => (

    <GroupInput>
        <input placeholder={props.placeholder} name={props.name} value={props.value} className={props.erro ? 'invalido' : ''} onChange={props.onChange} />
        {props.erro && <span>{props.textoErro}</span>}
    </GroupInput>

)

export default Input;