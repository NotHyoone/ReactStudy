# 자바 스크립트 공부

## 변수

var 변수명
let 변수명
const 변수명
변수 만들 때 let 붙이는게 일반적

호이스팅: 변수나 함수를 스코프 상단으로 끌어올리는 것으로 버그의 원인이 될 수 있음

## 함수

정의
```
function add(a, b) {
    let temp = x + y
    return temp
}
```

실행
`add(1, 2)`

입력, 출력이 없을 수 있음

익명함수
` ( (x,y) => {return x+y} ) (1, 2) `

## 조건문

만약 돈이 5000원 이상 있다면 택시를 탄다.
없으면 걸어간다.

```
if(money > 5000) {
    rideTaxi();
} else {
    walk();
}
```

## 반복문

```
for (let i = 0; i < 10; i++) {
    console.log("나무 찍기 " + i);
}
```

``` 
myArray = [1,2,3,4,5]

myArray.forEach(element => {
    console.log("나무 찍기 " + element);
});
```

- 자바 스크립트 특징 

    **널널한 문법 + 좀 특이함**
