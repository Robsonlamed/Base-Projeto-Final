import { Calendar } from '../../assets/icons/Calendar'
// import { ChevronDown } from '../../assets/icons/ChevronDown'
import { CalendarioDashboardStyle } from './styles'

type CalendarioDashboardProps = {
  data: number
  data30: number
  data60: number
  data90: number
  data120: number
  // onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export function CalendarioDashboard({
  data,
  data30,
  data60,
  data90,
  data120,
}: // onChange,
CalendarioDashboardProps) {
  return (
    <div>
      <CalendarioDashboardStyle>
        <Calendar />
        <span>Mostrar:</span>
        <select name="" id="">
          <option value={data}>Este mês</option>
          <option value={data30}>30 dias</option>
          <option value={data60}>60 dias</option>
          <option value={data90}>90 dias</option>
          <option value={data120}>120 dias</option>
        </select>
        {/* <ChevronDown /> */}
      </CalendarioDashboardStyle>
    </div>
  )
}
