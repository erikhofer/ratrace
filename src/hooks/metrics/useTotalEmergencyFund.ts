import { useAssets } from '../useAssets'

export const useTotalEmergencyFund = () => {
  return useAssets()
    .filter(a => a.isEmergencyFund)
    .reduce((sum, curr) => sum + curr.currentValue, 0)
}
