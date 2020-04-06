import { mockMethods } from 'aspida-mock'
import works from '~/apis/@seeds/works.json'

export type Work = typeof works[0]

export interface Methods {
  get: {
    resBody: Work
  }
}

export default mockMethods<Methods>({
  get: ({ values }) => ({
    status: 200,
    resBody: works.filter(({ id }) => +id === values.workId)[0]
  })
})
