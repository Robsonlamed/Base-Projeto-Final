class DateHelper {
  private now: Date = new Date()

  init() {
    this.now = new Date()
  }

  private getMonth() {
    return this.now.getMonth()
  }

  private getFullYear() {
    return this.now.getFullYear()
  }

  private getLastDay() {
    const [year, month] = this.getYearAndMonth()

    return new Date(year, month + 1, 0).getDate()
  }

  // eslint-disable-next-line class-methods-use-this
  private toDateBr(date: Date): string {
    return date.toLocaleDateString('pt-br')
  }

  private getYearAndMonth = () => {
    return [this.getFullYear(), this.getMonth()]
  }

  public thisMonth() {
    this.init()

    const [year, month] = this.getYearAndMonth()

    return {
      start: this.toDateBr(new Date(year, month, 1)),
      end: this.toDateBr(this.now),
      // end2: this.toDateBr(new Date(year, month, this.getLastDay()))
    }
  }

  public lastDays(days: number) {
    this.init()

    const { now } = this

    return {
      end: this.toDateBr(now),
      start: this.toDateBr(new Date(now.setDate(now.getDate() - days))),
    }
  }
}

export const dateHelper = new DateHelper()
