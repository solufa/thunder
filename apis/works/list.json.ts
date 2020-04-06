import { mockMethods } from 'aspida-mock'
import works from '~/apis/@seeds/works.json'

export interface WorkSummary {
  id: string
  title: string
}

export interface Methods {
  get: {
    resBody: WorkSummary[]
  }
}

export default mockMethods<Methods>({
  get: () => ({
    status: 200,
    resBody: works.map(({ id, title }) => ({ id, title }))
  })
})
