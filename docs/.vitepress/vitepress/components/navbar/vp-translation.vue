<script setup lang="ts">
import { useRouter } from 'vitepress'
import { useTranslation } from '../../composables/translation'

const router = useRouter()
const { switchLang, languageMap, langs, lang, locale } = useTranslation()

const toTranslation = () => {
  router.go(`/${lang.value}/guide/translation`)
}
</script>

<template>
  <div class="translation-container">
    <ClientOnly>
      <ElDropdown popper-class="translation-popup" role="navigation">
        <ElIcon :size="24" :aria-label="locale.language">
          <i-ri-translate-2 />
        </ElIcon>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem
              v-for="l in langs"
              :key="l"
              :class="{ language: true, selected: l === lang }"
              @click="switchLang(l)"
            >
              {{ languageMap[l] }}
            </ElDropdownItem>
            <ElDropdownItem class="language selected" @click="toTranslation">
              {{ locale.help }}
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixins' as *;

.translation-container {
  display: none;
  height: 24px;
  padding: 0 12px;
  cursor: pointer;

  @include respond-to('md') {
    display: block;
  }
}
</style>

<style lang="scss">
.el-dropdown__popper.translation-popup {
  --xn-bg-color-overlay: var(--bg-color);
  --xn-popper-border-radius: 8px;
  --xn-border-color-light: transparent;

  padding: 7px 0;
  min-width: 192px;
  transition: background-color 0.5s;

  .el-popper__arrow {
    display: none;
  }

  .language {
    padding: 0 16px;
    line-height: 28px;

    &.selected {
      --xn-text-color-regular: var(--brand-color);
    }
  }
}
</style>
