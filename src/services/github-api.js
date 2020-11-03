// github api fetch - will name in username from search bar

const getUserInfo = async () => {
  const res = await fetch('https://api.github.com/users/katiepdx')

  if (!res.ok) return ('failed to fetch from api')

  const userInfo = await res.json()

  return userInfo
}

export default getUserInfo
