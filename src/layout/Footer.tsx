import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Footer (): JSX.Element {
  return (
    <footer className='bg-slate-900 text-white'>
      <div className='flex justify-between items-center py-2 px-4 text-xs'>
        <p className='flex-[2]'>
          Created with <span className='text-red-400'>❤ </span>as part of
          <a
            href='https://theodinproject.com'
            className='text-yellow-400 hover:text-yellow-200'
          >
            {' '}
            The Odin Project
          </a>
        </p>
        <a
          href='https://github.com/kmsedu'
          className='flex justify-end text-yellow-400 hover:text-yellow-200'
        >
          <FontAwesomeIcon icon={brands('github')} size='2x' />
        </a>
      </div>
    </footer>
  )
}
