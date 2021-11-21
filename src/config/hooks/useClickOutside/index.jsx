import useEventListener from './useEventListener'

const useClickOutside = (ref, callback) => {
  // eslint-disable-next-line consistent-return
  useEventListener('click', (e) => {
    if (ref.current === null || ref.current.contains(e.target)) return callback(e)
  }, document)
}

export default useClickOutside
