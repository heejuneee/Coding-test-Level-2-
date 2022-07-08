def solution(record):
    ENTER_SUFFIX = "님이 들어왔습니다." 
    LEAVE_SUFFIX = "님이 나갔습니다."

    uidToNickname = {}
    behavior_list = []

    for r in record: 
        action = r.split(' ')[0]
        uid = r.split(' ')[1]

        if action == "Enter":
            uidToNickname[uid] = r.split(' ')[2]
            behavior_list.append((uid, "e"))
        elif action == "Change":
            uidToNickname[uid] = r.split(' ')[2]
        elif action == "Leave":
            behavior_list.append((uid, "l"))

    answer = []
    for b in behavior_list:
        if b[1] == "e":
            answer.append(uidToNickname[b[0]] + ENTER_SUFFIX)
        elif b[1] == "l":
            answer.append(uidToNickname[b[0]] + LEAVE_SUFFIX)

    return answer
