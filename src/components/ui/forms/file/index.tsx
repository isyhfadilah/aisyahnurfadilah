import clsx from 'clsx'
import { HTMLProps, useMemo } from 'react'

interface InputFileProps extends HTMLProps<HTMLInputElement> {
  className?: string
  label?: string
  hint?: string
  variant?: 'default' | 'error' | 'success' | 'dark'
  append?: React.ReactNode | string
  containerClass?: string
  error?: string
}

export const InputFile: React.FC<InputFileProps> = ({
  className,
  label,
  required,
  hint,
  variant = 'default',
  containerClass,
  error,
  ...rest
}) => {
  const theme = useMemo(() => {
    let className = {
      labelColor: 'text-white',
      hintColor: 'text-gray-400',
      placeholderColor: 'placeholder:text-gray-400/80',
      borderColor: 'border-[#3A3A3A]'
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
      default:
        break
    }
    return className
  }, [variant])

  return (
    <div className={clsx('flex flex-col space-y-1', containerClass)}>
      {label && (
        <label className={clsx('text-sm font-light text-left', theme.labelColor)}>
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type="file"
          className={clsx(
            'px-4 py-3 rounded-xl bg-transparent focus:outline-none border w-full font-light text-sm disabled:border-current/10 disabled:opacity-10',
            theme.placeholderColor,
            theme.borderColor,
            className
          )}
          required={required}
          {...rest}
        />
      </div>
      {hint && <span className={clsx('text-xs font-light text-left', theme.hintColor)}>{hint}</span>}
      {error && <span className={clsx('text-xs font-light text-left text-red-400', theme.hintColor)}>{error}</span>}
    </div>
  )
}
