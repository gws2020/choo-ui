/* <template lang="pug">
  section(
    :class="themeClass"
  )
    section(
      v-if="$slots.header"
      :class="`${frameName}-page-header`"
    )
      slot(
        name="header"
      )
    section(
      :class="`${frameName}-page-main`"
    )
      section(
        :class="`${frameName}-page-content`"
      )
        slot
        slot(
          name="content"
        )
      section(
        v-if="$slots.footer"
        :class="`${frameName}-page-footer`"
      )
        slot(
          name="footer"
        )
      slot(
        name="main"
      )
    slot(
      name="page"
    )
</template>

<script lang="ts"> */
import { Component } from 'vue-property-decorator'
import ChooUiMixins from '../../mixins'
import Vue, { CreateElement, VNode } from 'vue'

@Component
export default class Page extends ChooUiMixins {

  public static isShowHeader: boolean = true

  public name: string = 'page'
  public test: string = 'bbb'

  public get isRootPage(): boolean {
    return this.getParentComponent(this)
  }

  public render (h: CreateElement): VNode {
    const {
      themeClass,
      frameName,
      isRootPage,
      $slots
    } = this

    const Header = $slots.header &&
      (
        isRootPage ?
          <header class={`${frameName}-page-header`}>{ $slots.header }</header> :
          <section class={`${frameName}-page-header`}>{ $slots.header }</section>
      )

    const Content = isRootPage ?
      <main class={`${frameName}-page-content`}>
        { $slots.default }
        { $slots.content }
      </main> :
      <section class={`${frameName}-page-content`}>
        { $slots.default }
        { $slots.content }
      </section>

    const Footer = $slots.footer &&
      (
        isRootPage ?
          <footer class={`${frameName}-page-footer`}>{ $slots.footer }</footer> :
          <section class={`${frameName}-page-footer`}>{ $slots.footer }</section>
      )

    return (
      <section class={ themeClass }>
        { Page.isShowHeader && Header }
        { $slots.page }
        <section class={`${frameName}-page-main`}>
          { Content }
          { Footer }
          { $slots.main }
        </section>
      </section>
    )
  }

  private getParentComponent(component: Vue): boolean {
    const rootComponent: Vue = this.$root
    const parentComponent: Vue = component.$parent
    if (rootComponent === parentComponent) {
      return true
    }
    if ((parentComponent as any).name === this.name) {
      return false
    } else {
      return this.getParentComponent(parentComponent)
    }
  }
}
