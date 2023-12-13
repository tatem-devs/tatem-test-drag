'use client'

import { Swappable, Plugins } from '@shopify/draggable';
import { useEffect, useRef, useState } from 'react';

const tiles = [
  {
    color: 'bg-red-400'
  },
  {
    color: 'bg-red-500'
  },
  {
    color: 'bg-red-600'
  },
  {
    color: 'bg-orange-400'
  },
  {
    color: 'bg-orange-500'
  },
  {
    color: 'bg-orange-600'
  },
  {
    color: 'bg-yellow-400'
  },
  {
    color: 'bg-yellow-500'
  },
  {
    color: 'bg-yellow-600'
  },
  {
    color: 'bg-pink-400'
  },
  {
    color: 'bg-pink-500'
  },
  {
    color: 'bg-pink-600'
  },
]

export default function Home() {
  const ref = useRef(false)
  const [actionLog, setActionLog] = useState<any[]>([])
  const [swappableObject, setSwappableObject] = useState<Swappable | null>(null)

  const undoAction = () => {
    // TODO: implement
  }

  const redoAction = () => {
    // TODO: implement
  }

  useEffect(() => {
    if (!ref.current) {
      const containerSelector = '#draggable-container'
      const container = document.querySelectorAll(containerSelector)
  
      if (container) {
        const swappable = new Swappable(container, {
          draggable: '.draggable',
          mirror: {
            appendTo: containerSelector,
            constrainDimensions: true,
          },
          plugins: [Plugins.ResizeMirror],
        });
        // TODO: implement action log within the following functions
        swappable.on('swappable:stop', (e) => {
          console.log(e)
        })
        swappable.on('swappable:swapped', (e) => {
          console.log(e)
        })
        setSwappableObject(swappable)
      }

      // TODO: load last saved state on page refresh
    }
    return () => {
      ref.current = true
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-10">
      <h1 className='text-5xl font-bold'>Tatem Drag Test</h1>
      <div className='flex items-center justify-center gap-5'>
        <button
          // TODO: implement disabled logic
          disabled={true}
          className='px-3 py-1 bg-gray-100 rounded disabled:bg-gray-300 disabled:text-gray-500 font-mono'
          onClick={undoAction}
        >
          Undo action
        </button>
        <button
          // TODO: implement disabled logic
          disabled={true}
          className='px-3 py-1 bg-gray-100 rounded disabled:bg-gray-300 disabled:text-gray-500 font-mono'
          onClick={redoAction}
        >
          Redo action
        </button>
      </div>
      <div id='draggable-container' className='grid grid-cols-4 gap-5 mx-auto w-full h-full'>
        {tiles.map((tile, idx) => {
          return (
            <div key={idx} id={`box-${idx+1}`} className={'draggable cursor-pointer hover:shadow-lg flex items-center justify-center flex-col gap-2 rounded w-full h-40 drop-shadow-lg ' + tile.color}>
              <h3 className='text-2xl font-bold text-gray-100'>{idx + 1}</h3>
            </div>
          )
        })}
      </div>
    </main>
  )
}
