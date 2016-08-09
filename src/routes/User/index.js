// Sync route definition
import subRoutes from './routes'

export default {
  title: '用户管理',
  name:'user',
  component: resolve => require(['./components/UserView'], resolve),
  subRoutes
}
