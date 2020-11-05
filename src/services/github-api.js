// github api fetch - will name in username from search bar

export const getUserInfo = async (search = 'github') => {
  // USER and REPOS fetch
  const reposRes = await fetch(`https://api.github.com/users/${search}/repos`)
  const userRes = await fetch(`https://api.github.com/users/${search}`)
  
  if (!reposRes.ok) return ('failed to fetch repos from api')
  if (!userRes.ok) return ('failed to fetch user from api')
  
  const user = await userRes.json()
  const repos = await reposRes.json()

  // USER INFO object
  const userInfo = {
    user,
    repos
  }

  return userInfo
}
