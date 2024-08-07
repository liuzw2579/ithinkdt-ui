import type { CNode } from 'css-render'
import { type Ref, inject, onBeforeMount } from 'vue'
import { useSsrAdapter } from '@css-render/vue3-ssr'
import { configProviderInjectionKey } from '../config-provider/src/context'
import globalStyle from '../_styles/global/index.cssr'
import { throwError } from '../_utils'
import { c } from '../_utils/cssr'
import { cssrAnchorMetaName } from './common'

export default function useStyle(
  mountId: string,
  style: CNode,
  clsPrefixRef: Ref<string | undefined>,
  styleIsolate?: boolean
): void {
  if (!style) {
    if (__DEV__)
      throwError('use-style', 'No style is specified.')
    return
  }
  const ssrAdapter = useSsrAdapter()
  const NConfigProvider = inject(configProviderInjectionKey, null)
  const mountStyle = (): void => {
    const nsPrefix = styleIsolate !== false && NConfigProvider?.styleIsolate
      ? NConfigProvider.mergedNamespaceRef.value
      : undefined
    if (nsPrefix) {
      style = c(`:where(.${nsPrefix})`, [style])
    }
    const clsPrefix = clsPrefixRef.value
    style.mount({
      id: `${nsPrefix ? `${nsPrefix}-` : ''}${clsPrefix === undefined ? mountId : clsPrefix + mountId}`,
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      props: {
        bPrefix: clsPrefix ? `.${clsPrefix}-` : undefined
      },
      ssr: ssrAdapter,
      parent: NConfigProvider?.styleMountTarget
    })
    if (!NConfigProvider?.preflightStyleDisabled) {
      globalStyle.mount({
        id: 'n-global',
        head: true,
        anchorMetaName: cssrAnchorMetaName,
        ssr: ssrAdapter,
        parent: NConfigProvider?.styleMountTarget
      })
    }
  }
  if (ssrAdapter) {
    mountStyle()
  }
  else {
    onBeforeMount(mountStyle)
  }
}
