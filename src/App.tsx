import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <>HENLOHENLO </>
      <Button>{'KKKK'}</Button>
    </ThemeProvider>
  )
}

export default App
