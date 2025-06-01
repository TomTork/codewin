export const dataNotFound = (url: string, error?: string) => {
  throw new Error(`Data not found. Please check the url: ${url}` + error ? ` check error: ${error}` : '')
}