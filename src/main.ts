import './lib/weee.scss'
import './index.scss'
import { createApp } from 'vue'  // 引入createApp，用来创建app实例的重要函数
import App from './App.vue'  // 引入App.vue组件
import {router} from './router'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'


const app = createApp(App)
  app.use(router)
  app.mount('#app')  //  createApp接受了App组件，并把它挂载在w r了当前的div.app上
app.component('Markdown', Markdown)
