import Link from 'next/link'

export default function Home() {
  const sectors = [
    { name: 'Home Energy Apps', count: '12+ analyzed' },
    { name: 'Residential Solar', count: '8+ platforms' },
    { name: 'EV Charging Networks', count: '15+ networks' },
    { name: 'Community Energy', count: '5+ models' },
    { name: 'Smart Meter Analytics', count: '7+ solutions' },
    { name: 'Battery Storage', count: '6+ services' },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-gray-100'>
      <div className='max-w-7xl mx-auto px-4 py-20 text-center'>
        <h1 className='text-5xl font-bold text-gray-900 mb-6'>
          Energy Venture <span className='text-blue-600'>Studio</span>
        </h1>
        <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
          AI-powered platform for identifying, analyzing, and building energy ventures across European markets
        </p>
        <Link href='/studio' className='inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700'>
          Launch Studio
        </Link>
      </div>
      <div className='max-w-5xl mx-auto px-4 pb-20 grid grid-cols-2 md:grid-cols-3 gap-4'>
        {sectors.map((s) => (
          <div key={s.name} className='bg-white rounded-xl p-6 shadow-sm border'>
            <h3 className='font-semibold text-gray-900'>{s.name}</h3>
            <p className='text-sm text-gray-500'>{s.count}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
