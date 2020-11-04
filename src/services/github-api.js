// github api fetch - will name in username from search bar

export const getUserInfo = async (search = 'github') => {
  const res = await fetch(`https://api.github.com/users/${search}`)

  if (!res.ok) return ('failed to fetch from api')

  const userInfo = await res.json()

  return userInfo
}
