import { Box } from '@mui/material'
import JobsBlock from './JobsBlock'
import TopCompanies from './TopCompanies'

const Home = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background:
          'linear-gradient(to bottom, rgba(22, 28, 36, 0.8), rgba(22, 28, 36, 0.8))',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}
    >
      <JobsBlock />
      <TopCompanies />
    </Box>
  )
}

export default Home
