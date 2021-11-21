import instance from '..'

const useGet = async (link = '', setData = () => {}, setFetch = () => {}) => {
  setFetch(true)

  try {
    const {
      data,
    } = await instance.get(`${link}`)
    if (data.type !== 'undefined') {
      setData(data)
    }
  } catch (error) {
    setData(error)
  }
  setFetch(false)
}

export default useGet
