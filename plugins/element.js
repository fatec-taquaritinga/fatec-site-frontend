import Vue from 'vue'

import 'element-ui/lib/theme-default/dialog.css'
import 'element-ui/lib/theme-default/popover.css'
import 'element-ui/lib/theme-default/col.css'
import 'element-ui/lib/theme-default/row.css'
import 'element-ui/lib/theme-default/input.css'
import 'element-ui/lib/theme-default/button.css'
import 'element-ui/lib/theme-default/icon.css'
import 'element-ui/lib/theme-default/card.css'


import {Dialog, Popover, Col, Row, Input, Button, Icon, Card} from 'element-ui'

Vue.use(Dialog)
Vue.use(Popover)
Vue.use(Col)
Vue.use(Row)
Vue.use(Input)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Card)

import locale from 'element-ui/lib/locale/lang/pt-br'
Vue.use({ locale })