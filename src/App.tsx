import { Checkbox } from '@/components/ui/checkbox'

import './App.css'
import { Card } from './components/ui/card'

function App() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-5">Country Check</h1>

      <div className="w-full md:w-1/2 lg:w-1/3">
        <Card className="flex flex-col p-5 text-start">
          <label className="space-x-2 flex items-center">
            <Checkbox id="all" name="all" />
            <span>
              <strong>Select All</strong>
            </span>
          </label>
          <label className="space-x-2 flex items-center">
            <Checkbox id="india" />
            <span>India</span>
          </label>
          <label className="space-x-2 flex items-center">
            <Checkbox id="usa" />
            <span>USA</span>
          </label>
          <label className="space-x-2 flex items-center">
            <Checkbox id="france" />
            <span>France</span>
          </label>
        </Card>
      </div>
    </main>
  )
}

export default App
