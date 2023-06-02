let area = [
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

//locals에서 하나 하나씩 나누면 각각의 이름을 어떤걸로 지정해서 출력
//area에 username만 출력
//a = 위에 area를 변수로 지정한거임
area.forEach((a) => {
    console.log(a.username);
});

area.forEach((area) =>
    console.log(area.id)
);

area.forEach((a) => {
    console.log(`id: ${a.id}이고 username: ${a.username}`);
});