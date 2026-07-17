import  useLogout  from '../../hooks/useLogout'
import Button from '../../components/Button'

const HomePage = () => {
  return (
    <div>
      <h3>Home Page!</h3>
      <Button text="Logout" onClick={useLogout} />
    </div>
  )
}

export default HomePage