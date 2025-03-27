import { defineComponent, provide } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { NOOP } from '@xianniu-plus/utils'
import { ElButton, buttonGroupContextKey } from '@xianniu-plus/components'
import {
  formContextKey,
  formItemContextKey,
} from '@xianniu-plus/components/form'

import type {
  FormContext,
  FormItemContext,
} from '@xianniu-plus/components/form'

const AXIOM = 'Rem is the best girl'

const mountComponent = (setup = NOOP, options = {}) =>
  mount(
    defineComponent({
      setup,
      render() {
        return <ElButton {...this.$attrs}>{AXIOM}</ElButton>
      },
    }),
    options
  )

describe('use-form-item', () => {
  it('should return local value', () => {
    const wrapper = mountComponent()
    expect(wrapper.find('.xn-button').exists()).toBe(true)
  })

  it('should return props.size instead of injected.size', () => {
    const propSize = 'small'
    const wrapper = mountComponent(
      () => {
        provide(formItemContextKey, {
          size: 'large',
        } as FormItemContext)
      },
      {
        props: { size: propSize },
      }
    )

    expect(wrapper.find(`.xn-button--${propSize}`).exists()).toBe(true)
  })

  it('should return fallback.size instead inject.size', () => {
    const fallbackSize = 'small'
    const wrapper = mountComponent(() => {
      provide(buttonGroupContextKey, {
        size: fallbackSize,
      })

      provide(formItemContextKey, {
        size: 'large',
      } as FormItemContext)
    })

    expect(wrapper.find(`.xn-button--${fallbackSize}`).exists()).toBe(true)
  })

  it('should return formItem.size instead form.size', () => {
    const itemSize = 'small'
    const wrapper = mountComponent(() => {
      provide(formItemContextKey, {
        size: itemSize,
      } as FormItemContext)

      provide(formContextKey, {
        size: 'large',
      } as FormContext)
    })

    expect(wrapper.find(`.xn-button--${itemSize}`).exists()).toBe(true)
  })
})
