import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Calendar } from '../../assets/icons/Calendar'
// import { ChevronDown } from '../../assets/icons/ChevronDown'
import { CalendarDashboardStyle } from './styles'
import { dateHelper } from '../../utils'

type CalendarDashboardProps = {
  setDate: Dispatch<SetStateAction<{ end: string; start: string }>>
}

export function CalendarDashboard({ setDate }: CalendarDashboardProps) {
  const changeInterval = (event: ChangeEvent<HTMLSelectElement>) =>
    event.target.value === '0'
      ? setDate(dateHelper.thisMonth())
      : setDate(dateHelper.lastDays(Number(event.target.value)))

  return (
    <div>
      <CalendarDashboardStyle>
        <Calendar />
        <span>Mostrar:</span>
        <select onChange={changeInterval} name="" id="">
          <option value={0}>Este mês</option>
          <option value={30}>30 dias</option>
          <option value={60}>60 dias</option>
          <option value={90}>90 dias</option>
          <option value={120}>120 dias</option>
        </select>
        {/* <ChevronDown /> */}
      </CalendarDashboardStyle>
    </div>
  )
}
