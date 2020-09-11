import { AppState } from './model'
import moment from 'moment'

export const initalState: AppState = {
  profile: {
    assets: [
      {
        id: '1cf9cf6e-272a-4261-9e6a-25cdcbab3aa3',
        name: 'Trade Republic',
        amount: 1337,
        isEmergencyFund: false,
        history: [{ amount: 1337, date: moment().toISOString() }]
      },
      {
        id: 'fa8dd356-0335-46bf-8344-d5f713e9d144',
        name: 'Savings Account',
        amount: 420,
        isEmergencyFund: true,
        history: [{ amount: 420, date: moment().toISOString() }]
      }
    ]
  }
}
