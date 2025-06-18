import './assets/main.css'

// 아래는 객체 주소값에서 속성이름 {}<- 이거 안에 들어가는거고
// 속성명을 정확하게 적어야함
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// ./ 이거는 객체 주소값 넘어오는거 인데 그모든거 가져올려면 {}<- 이거 없이
// App는 변수명 처럼 쓰기떄문에 아무거나 써도됨
import App from './App.vue'
// 폴더명을 적으면 그아래에있는 js 파일이 넘어옴 
import router from './router'

const app = createApp(App)

// 상태관리는 pinia 쓰겟다 선언
app.use(createPinia())
app.use(router)

// mount 붙여넣기 위에 쓴명령어나 컴포넌트를 id app 인애한데 먹인다
app.mount('#app')
