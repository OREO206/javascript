function confirmTest() {
    confirm('회원가입을 하시겠습니까?');
}

function register() {
    if(confirm('회원가입을 하시겠습니까?')) {
        location.href = "https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/";
    }
}

// onclick="memberDelete(10)" html에는 숫자10이오지만 js에는 변수로 받아함
function memberDelete(id) {
    if(confirm(id + '사원 정보를 정말 삭제하시겠습니까?\n삭제하신 정보는 복구할 수 없습니다.')) {
        location.href = "https:daum.net";
    }
};