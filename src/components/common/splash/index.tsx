'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

const INTRO_DURATION = 3200
const INTRO_STORAGE_KEY = 'portfolio-intro-seen'

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const targetX = useMotionValue(0)
  const targetY = useMotionValue(0)
  const targetRotateX = useMotionValue(0)
  const targetRotateY = useMotionValue(0)
  const x = useSpring(targetX, { stiffness: 120, damping: 18, mass: 0.45 })
  const y = useSpring(targetY, { stiffness: 120, damping: 18, mass: 0.45 })
  const rotateX = useSpring(targetRotateX, { stiffness: 120, damping: 18, mass: 0.45 })
  const rotateY = useSpring(targetRotateY, { stiffness: 120, damping: 18, mass: 0.45 })
  const enterButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(INTRO_STORAGE_KEY)) return
      window.sessionStorage.setItem(INTRO_STORAGE_KEY, 'true')
    } catch (error) {
      console.error('Unable to check whether the portfolio intro was already shown.', error)
    }

    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    enterButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsVisible(false)
      if (event.key === 'Tab') {
        event.preventDefault()
        enterButtonRef.current?.focus()
      }
    }
    const timer = window.setTimeout(() => {
      targetX.set(0)
      targetY.set(0)
      targetRotateX.set(0)
      targetRotateY.set(0)
      setIsVisible(false)
    }, INTRO_DURATION)

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isVisible, targetRotateX, targetRotateY, targetX, targetY])

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || event.pointerType === 'touch') return

    const bounds = event.currentTarget.getBoundingClientRect()
    const pointerX = (event.clientX - bounds.left) / bounds.width - 0.5
    const pointerY = (event.clientY - bounds.top) / bounds.height - 0.5

    targetX.set(pointerX * 12)
    targetY.set(pointerY * 10)
    targetRotateX.set(pointerY * -6)
    targetRotateY.set(pointerX * 8)
  }

  const resetPointer = () => {
    targetX.set(0)
    targetY.set(0)
    targetRotateX.set(0)
    targetRotateY.set(0)
  }

  const dismiss = () => {
    resetPointer()
    setIsVisible(false)
  }

  const motionTransition = prefersReducedMotion ? { duration: 0 } : { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="portfolio-intro"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio Aisyah Nur Fadilah"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: motionTransition }}>
          <div className="portfolio-intro-inner" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
            <motion.button
              ref={enterButtonRef}
              type="button"
              className="portfolio-intro-mark"
              layoutId={prefersReducedMotion ? undefined : 'portfolio-intro-mark'}
              aria-label="Masuk ke portofolio"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.76, rotate: -10, y: 18 }}
              animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
              transition={{
                ...motionTransition,
                type: 'spring',
                stiffness: 150,
                damping: 18
              }}
              style={{ x, y, rotateX, rotateY }}
              onClick={dismiss}>
              A<span>.</span>
            </motion.button>
            <motion.p
              className="portfolio-intro-hint"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...motionTransition, delay: prefersReducedMotion ? 0 : 0.3 }}>
              Enter portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen
