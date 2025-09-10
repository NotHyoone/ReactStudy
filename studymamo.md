# JSX 문법

## JSX 문법1

class 넣을 땐 className <- 카밀케이스로 명명함

## JSX 문법2

변수 꽂을 땐(바인딩)
{변수명} -> 중괄호 문법

## JSX 문법3

style 넣을 땐

style={ {이름 : '값'} }

## state 만드는 법

1. import {useState}
2. useState(보관할 자료)
3. let[작명1, 작명2] -> Destructuring 문법
   1. 작명1: state에 보관했던 자료 나옴
   2. 작명2: state 변경 도와주는 함수

state 언제 써야하나?
-> 변동시 자동으로 html에 반영되게 만들고 싶을 때

## onClick 쓰는 법

- `<span onClick={ 함수 }></span>`

- case1: state 정의 아래에 함수 정의하기
`function 함수이름() {
   console.log(1)
}`

- case2: `<span onClick={ function func() { console.log(1) } }></span>`

- case3: { () => { console.log(1) } }

## state 변경하는 법(등호로 변경 금지)

## state변경함수 특징

기존state == 신규state의 경우 변경 안 해줌

## array/object 특징

변수1 & 변수2 화살표가 같으면
변수1 == 변수2 비교해도 true 나옴

state가 array/object면 독립적 카피본을 만들어서 수정해야 함

div를 컴포넌트 문법인 `<Modal></Modal>` 로 축약할 수 있음

## 컴포너트 만드는 법

1. function 만들고
2. return() 안에 html 담기
3. `<함수명></함수명>` 쓰기

- 참고1: 의미없는 `<div></div>` 대신 `<></>` 사용 가능

- 참고2: `<함수명></함수명>`, `<함수명/>` 둘 다 사용 가능

## 컴포넌트로 만들면 좋은 것

1. 반복적인 html 축약할 때
2. 큰 페이지들
3. 자주변경되는 것들

## 컴포넌트의 단점

- state 가져다쓸 때 문제가 생김

- 참고: 컴포넌트 만드는 문법2
   `const Modal = () => { return( <div></div> )}`