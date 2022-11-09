
export function SetBankStorage (value) {
  if (value !== undefined) {
    window.localStorage.setItem('DataBanks', JSON.stringify(value))
  }
}

export function GetBankStorage () {
  return JSON.parse(window.localStorage.getItem('DataBanks'))
}
