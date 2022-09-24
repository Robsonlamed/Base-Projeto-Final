import { Calendar } from '../../assets/icons/Calendar'
// import { ChevronDown } from '../../assets/icons/ChevronDown'
import { CalendarioDashboardStyle } from './styles'

type CalendarioDashboardProps = {
  data: string
  data30: string
  data60: string
  data90: string
  data120: string
}

export function CalendarioDashboard({
  data,
  data30,
  data60,
  data90,
  data120,
}: CalendarioDashboardProps) {
  return (
    <div>
      <CalendarioDashboardStyle>
        <Calendar />
        <span>Mostrar:</span>
        <select name="" id="">
          <option value="">{data}</option>
          <option value="">{data30}</option>
          <option value="">{data60}</option>
          <option value="">{data90}</option>
          <option value="">{data120}</option>
        </select>
        {/* <ChevronDown /> */}
      </CalendarioDashboardStyle>
    </div>
  )
}
