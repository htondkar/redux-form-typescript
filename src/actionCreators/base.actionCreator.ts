export default class BaseAction<T> {
  constructor(readonly actionName: string) {}

  start = () => {
    return {
      type: `${this.actionName}_START`,
    }
  }

  success = (payload: Partial<T>) => {
    return {
      type: `${this.actionName}_SUCCESS`,
      payload,
    }
  }

  fail = (errors: any) => {
    return {
      type: `${this.actionName}_FAIL`,
      payload: errors,
    }
  }
}
