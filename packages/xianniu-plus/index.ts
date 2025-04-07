import installer from './defaults'
export * from '@xianniu-plus/components'
export * from '@xianniu-plus/constants'
export * from '@xianniu-plus/directives'
export * from '@xianniu-plus/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
;(async () => {
  if ('ResizeObserver' in window === false) {
    // Loads polyfill asynchronously, only if required.
    const module = await import('@juggle/resize-observer')
    // @ts-ignore
    window.ResizeObserver = module.ResizeObserver
  }
})()
