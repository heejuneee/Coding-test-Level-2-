function solution(record) {
    const splitRecord = [];
    const uidNickname = {};
    var answer = [];
    record.forEach(r => {
        const s = r.split(' ');
        splitRecord.push([s[0], s[1]])
        if(s[2]) {
            uidNickname[s[1]] = s[2];
        }
    });
    splitRecord.forEach(r => {
        let msg;
        if(r[0] === 'Enter') {
            msg = '님이 들어왔습니다.'
        }
        else if(r[0] === 'Leave') {
            msg =  '님이 나갔습니다.'
        }
        if(msg) {
            answer.push(`${uidNickname[r[1]]}${msg}`);
        }
    })

    return answer;
}
