// 주석문자
// 아래 여러줄 주석도 활용가능하다.

/*
 * 여러줄 주석 
 */


// 자바스크립트의 변수선언은 var 키워드를 사용한다.
// 변수명은 숫자로 시작해선 안되고, 하이픈(-)을 사용할 수 없다.
// 하이픈을 사용해야하는 경우 camelCase를 사용하여 표현한다.
var x;
var testCase;

// 변수 선언과 동시에 데이터를 넣을 수 있다.
// 데이터를 넣음과 동시에 Data Type이 정해진다. Data Type은 이 변수가 담고있는 데이터의 타입을 의미한다.

var nCount = 0;
// 데이터의 자료형을 변수 선언과 함께 확인할 수 없기 때문에, 앞에 type에 따른 접두어를 붙여주기도 한다.
// 이런 기법을 부르는 명칭이 있는데 까먹었다.
// 위 케이스는 0을 대입하였기 때문에 자료형 Number를 가진다.
// 생성자함수 : Number
// 데이터타입 : number
// 실제데이터 : 0
// 변수객체 : nCount
// Scope : window

var sChoEun = "조은";
// 생성자함수 : String
// 데이터타입 : string
// 실제데이터 : "조은"
// 변수객체 : sChoEun
// Scope : window

var obj = {}
// 생성자함수 : Object
// 데이터타입 : object
// 실제데이터 : {}
// 변수객체 : obj
// Scope : window

var bool = true;
// 생성자함수 : Boolean
// 데이터타입 : boolean
// 실제데이터 : true
// 변수객체 : bool
// Scope : window

var ufn = undefined;
// 데이터타입 : undefined
// 변수객체 : ufn
// Scope : window

var nul = null;
// 데이터타입 : null (object)
// 변수객체 : nul
// Scope : window

// Data Type을 명시해주는 것은 개발 시 여러모로 좋다
// 예를 들어 String + Number인 경우에 발생할 수 있는 에러를 명시적으로 방어할 수 있다.
// "0" + 1은 "01"이다.

// 함수(Function)은 실생활의 동사이다.
// 함수를 선언하는 방법은 크게 세가지이다.
// 1. 함수 선언문
// function 함수명(파라미터) { // 할 일 }
function reset() {

};


// 2. 함수 표현식
// var 함수명 = function(파라미터) { // 할일 }
var reset = function() {

};


// 3. 익명함수
// 함수 선언과 함께 바로 호출한다
// (function(파라미터) { })(파라미터값)
(function() { 
    
})()

// 위 케이스에서 모든 함수들은 상단에서 호출해보자.
// F12 > 콘솔
var move = function(posX, posY) {
    return function(posZ, posA) {
        return function(posB, posC) {
            return function(posD, posE) {
                console.log(posX, posY);
                console.log(posZ, posA);
                console.log(posB, posC);
                console.log(posD, posE);
            }
        }
    }
}

var choeun = {
    name : "choeun",
    companys : ["NTS", "SK Comms"],
    job : "UI Developer",
    Mother : {
        name : "Gold River",
        place : "광주광역시"
    },
    replace : function() { }
}

choeun.name;
choeun["name"];

var Person = function(name, job) {
    this.name = name;
    this.job = job;
}
Person.prototype = {
    getName : function() {
        return this.name;
    },
    setName : function(name) {
        this.name = name;    
    }
};

var choeun = new Person("조은", "UI개발자");
var youngjun = new Person("박영준", "개발자");








