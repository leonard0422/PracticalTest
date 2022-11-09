import { createContext, useContext, useEffect, useState } from 'react'
import { SetBankStorage, GetBankStorage } from '../utils/Storage'
import GetDataBank from '../service/BankService'

const BanckContext = createContext(undefined)

export default function BankCont ({ children }) {
  const [data, setData] = useState(undefined)
  useEffect(() => {
    const info = GetBankStorage()
    if (info) {
      setData(info)
    } else {
      GetDataBank().then((data) => {
        SetBankStorage(data)
        setData(data)
      }).catch(console.error)
    }
  }, [])
  return <BanckContext.Provider value={data}>{children}</BanckContext.Provider>
}

export const useBanks = () => useContext(BanckContext)
