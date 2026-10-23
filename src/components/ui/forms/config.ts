export type Variant = 'default' | 'error' | 'success' | 'dark'
export type Size = 'sm' | 'md' | 'lg'
export const theme = (variant: Variant = 'default') => {
  let className = {
    labelColor: 'text-dark',
    hintColor: 'text-gray-400',
    placeholderColor: 'placeholder:text-gray-400/80',
    borderColor: 'border-dark/0'
  }
  switch (variant) {
    case 'error':
      className = {
        labelColor: 'text-danger',
        hintColor: 'text-danger',
        placeholderColor: 'placeholder:text-danger/80',
        borderColor: 'border-danger'
      }
      break
    case 'success':
      className = {
        labelColor: 'text-success',
        hintColor: 'text-success',
        placeholderColor: 'placeholder:text-success/80',
        borderColor: 'border-success'
      }
      break
    case 'dark':
      className = {
        labelColor: 'text-white',
        hintColor: 'text-gray-400',
        placeholderColor: 'placeholder:text-gray-400/80',
        borderColor: 'border-secondary'
      }
      break
    // case 'default':
    //   className = className
    default:
      break
  }
  return className
}
export const sizes = (size: Size) => {
  let className = ''
  switch (size) {
    case 'sm':
      className = 'px-5 py-2'
      break
    case 'md':
      className = 'px-5 py-3'
      break
    case 'lg':
      className = 'px-8 py-4'
      break
    default:
      break
  }
  return className
}
