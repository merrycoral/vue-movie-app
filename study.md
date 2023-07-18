## vuex

store 내에 여러 modules

getters는 상태를 활용하여 데이터를 만들어낸다.
함수를 이용하여 computed 데이터를 만들어낸다
(계산된 상태를 만들어낸다.)

데이터의 수정은 mutations에서만 가능하다

mutations를 통해 우리가 관리하는 데이터(상태)를 변경할 수 있다.
mutations만 데이터를 변경할 수 있다.

store의 Mutations를 실행할 때는 .commit() 사용
Actions를 실행할 때는 .dispatch() 사용

actions는 비동기로 동작하므로 주의한다.

https://github.com/merrycoral/vue-movie-app
