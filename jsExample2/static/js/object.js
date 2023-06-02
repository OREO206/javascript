// 회원 1명 저장하는 객체 생성하기
let obj1 = {
    id: 1,
    usrname: "코리아아이티",
    password: "1234",
    isRegister: true,
    registerDate: '2023-06-01'
};

// 회원 여러명 저장 : 배열[{}]
let members = [
    {
        id: 1, 
        username: "Korea"
    },
    {
        id: 2, 
        username: "Seoul",
    },
    {
        id: 3, 
        username: "Daegu",
    }
];

console.log(members);
// member에서 1번째 데이터 불러오기
console.log(members[1]);
// member에서 1번째 데이터에서 id만 불로 오기
console.log(members[1].id);
// member에서 1번째 데이터에서 username만 불로 오기
console.log(members[1].username);

//배열번호 1번 