export const fetchImg = async (url: string) => {
  const response = await fetch(url)
  const blob = await response.blob()
  return URL.createObjectURL(blob)
}
