import { TwitterFollowCard } from './TwitterCard/TwitterFollowCard'
import { usersMocks } from './TwitterCard/mocks/UsersMocks'

export const App = () => {
  return (
    <div className='app'>
      {usersMocks.map(({ id, userName, initialIsFollowing, name }) => (
        <TwitterFollowCard
          key={id}
          userName={userName}
          initialIsFollowing={initialIsFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </div>
  )
}
