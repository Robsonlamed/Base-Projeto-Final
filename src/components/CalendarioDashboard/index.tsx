import { Calendar } from '../../assets/icons/Calendar'
import { ChevronDown } from '../../assets/icons/ChevronDown'
import { CalendarioDashboardStyle } from './styles'

type CalendarioDashboardProps = {
  data: string
}

export function CalendarioDashboard({ data }: CalendarioDashboardProps) {
  return (
    <div>
      <CalendarioDashboardStyle>
        <Calendar />
        <span>Mostrar:</span>
        <p>{data}</p>
        <ChevronDown />
      </CalendarioDashboardStyle>
    </div>
  )
}
