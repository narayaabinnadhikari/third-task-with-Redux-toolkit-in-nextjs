import Image from 'next/image'
import AddUsers from './Components/AddUsers'
import DisplayUsers from './Components/DisplayUsers'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddUsers />
      <DisplayUsers />
    </main>
  )
}
