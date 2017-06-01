import Vue from 'vue'

import 'element-ui/lib/theme-default/dialog.css'
import 'element-ui/lib/theme-default/popover.css'
import 'element-ui/lib/theme-default/col.css'
import 'element-ui/lib/theme-default/row.css'
import 'element-ui/lib/theme-default/icon.css'

import Dialog  from 'element-ui/lib/dialog'
import Popover from 'element-ui/lib/popover'
import Col     from 'element-ui/lib/col'
import Row     from 'element-ui/lib/row'
import Icon    from 'element-ui/lib/icon'

Vue.use(Dialog)
Vue.use(Popover)
Vue.use(Col)
Vue.use(Row)
Vue.use(Icon)

import locale from 'element-ui/lib/locale/lang/pt-br'
Vue.use({ locale })