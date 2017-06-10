import Vue from 'vue'

import 'element-ui/lib/theme-default/dialog.css'
import 'element-ui/lib/theme-default/popover.css'
import 'element-ui/lib/theme-default/col.css'
import 'element-ui/lib/theme-default/row.css'
import 'element-ui/lib/theme-default/icon.css'
import 'element-ui/lib/theme-default/card.css'
import 'element-ui/lib/theme-default/carousel-item.css'
import 'element-ui/lib/theme-default/carousel.css'

import {Dialog, Popover, Col, Row, Icon, Card, Carousel, CarouselItem} from 'element-ui'

Vue.use(Dialog)
Vue.use(Popover)
Vue.use(Col)
Vue.use(Row)

Vue.use(Icon)
Vue.use(Card)
Vue.use(Carousel)
Vue.use(CarouselItem)

import locale from 'element-ui/lib/locale/lang/pt-br'
Vue.use({ locale })