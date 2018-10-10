/*! +v vant-es */
import Vue from 'vue'

import(`vant/es/vant-css/toast.css`)
Vue.use(require('vant/es/toast').default)

const vant = {
    // comment out module(s) you don't need
    'actionsheet': require('vant/es/actionsheet').default,
    'address-edit': require('vant/es/address-edit').default,
    'address-list': require('vant/es/address-list').default,
    'area': require('vant/es/area').default,
    'badge': require('vant/es/badge').default,
    'badge-group': require('vant/es/badge-group').default,
    'button': require('vant/es/button').default,
    'card': require('vant/es/card').default,
    'cell': require('vant/es/cell').default,
    'cell-group': require('vant/es/cell-group').default,
    'checkbox': require('vant/es/checkbox').default,
    'checkbox-group': require('vant/es/checkbox-group').default,
    'circle': require('vant/es/circle').default,
    'col': require('vant/es/col').default,
    'collapse': require('vant/es/collapse').default,
    'collapse-item': require('vant/es/collapse-item').default,
    'contact-card': require('vant/es/contact-card').default,
    'contact-edit': require('vant/es/contact-edit').default,
    'contact-list': require('vant/es/contact-list').default,
    'coupon-cell': require('vant/es/coupon-cell').default,
    'coupon-list': require('vant/es/coupon-list').default,
    'datetime-picker': require('vant/es/datetime-picker').default,
    'dialog': require('vant/es/dialog').default,
    'field': require('vant/es/field').default,
    'goods-action': require('vant/es/goods-action').default,
    'goods-action-big-btn': require('vant/es/goods-action-big-btn').default,
    'goods-action-mini-btn': require('vant/es/goods-action-mini-btn').default,
    'icon': require('vant/es/icon').default,
    'image-preview': require('vant/es/image-preview').default,
    'info': require('vant/es/info').default,
    'lazyload': require('vant/es/lazyload').default,
    'list': require('vant/es/list').default,
    'loading': require('vant/es/loading').default,
    'locale': require('vant/es/locale').default,
    'nav-bar': require('vant/es/nav-bar').default,
    'notice-bar': require('vant/es/notice-bar').default,
    'number-keyboard': require('vant/es/number-keyboard').default,
    'pagination': require('vant/es/pagination').default,
    'panel': require('vant/es/panel').default,
    'password-input': require('vant/es/password-input').default,
    'picker': require('vant/es/picker').default,
    'popup': require('vant/es/popup').default,
    'progress': require('vant/es/progress').default,
    'pull-refresh': require('vant/es/pull-refresh').default,
    'radio': require('vant/es/radio').default,
    'radio-group': require('vant/es/radio-group').default,
    'rate': require('vant/es/rate').default,
    'row': require('vant/es/row').default,
    'search': require('vant/es/search').default,
    'sku': require('vant/es/sku').default,
    'slider': require('vant/es/slider').default,
    'step': require('vant/es/step').default,
    'stepper': require('vant/es/stepper').default,
    'submit-bar': require('vant/es/submit-bar').default,
    'swipe': require('vant/es/swipe').default,
    'swipe-cell': require('vant/es/swipe-cell').default,
    'swipe-item': require('vant/es/swipe-item').default,
    'switch': require('vant/es/switch').default,
    'switch-cell': require('vant/es/switch-cell').default,
    'tab': require('vant/es/tab').default,
    'tabbar': require('vant/es/tabbar').default,
    'tabbar-item': require('vant/es/tabbar-item').default,
    'tabs': require('vant/es/tabs').default,
    'tag': require('vant/es/tag').default,
    'tree-select': require('vant/es/tree-select').default,
    'uploader': require('vant/es/uploader').default,
    'waterfall': require('vant/es/waterfall').default
}

/* ------------------------ end here ------------------------ */

const noCSS = [
    'area',
    'coupon-cell',
    'datetime-picker',
    'goods-action-big-btn',
    'goods-action-mini-btn',
    'lazyload',
    'locale',
    'step',
    'tabs',
    'waterfall'
]

import(`vant/es/vant-css/base.css`)

Object.keys(vant).forEach(name => {
    if (!/-(group|item)$/.test(name) && noCSS.indexOf(name) === -1) import(`vant/es/vant-css/${name}.css`)
    Vue.component(`van-${name}`, vant[name])
})
