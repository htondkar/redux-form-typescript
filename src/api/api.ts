export interface IResponse {
  status: 200 | 400
  data: { [key: string]: any }
  error?: { [key: string]: any }
}

class API {
  response: IResponse = {
    status: 200,
    data: {},
  }

  call(__: any): Promise<IResponse> {
    console.log('submitting', __)
    return new Promise(resolve => setTimeout(() => resolve(this.response), 3000))
  }
}

export default new API()
