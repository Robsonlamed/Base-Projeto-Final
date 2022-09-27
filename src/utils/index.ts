class DateHelper {
  private now: Date

  constructor() {
    this.now = new Date()
  }

  private getMonth() {
    return this.now.getMonth() + 1
  }

  private getYear() {
    return this.now.getFullYear()
  }

  private getLastDay() {
    return new Date(this.getYear(), this.getMonth()).getDate()
  }

  // eslint-disable-next-line class-methods-use-this
  private toDateBr(date: Date): string {
    return date.toLocaleDateString('pt-br')
  }

  public thisMonth() {
    return {
      start: this.toDateBr(new Date(this.getYear(), this.getMonth(), 1)),
      end: this.toDateBr(
        new Date(this.getYear(), this.getMonth(), this.getLastDay())
      ),
    }
  }

  public lastDays(days: number) {
    const { now } = this

    return {
      end: this.toDateBr(now),
      start: this.toDateBr(new Date(now.setDate(days * -1))),
    }
  }
}

export const dateHelper = new DateHelper()
