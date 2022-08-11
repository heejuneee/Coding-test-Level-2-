#include <iostream>
#include <string>
#include <vector>
#include <sstream>
#include <map>
#include <utility>

using namespace std;

// vector<string> solution(vector<string> record) {
//     vector<string> answer;
//     vector<string>::iterator it;
//     vector<pair<string,string> > vv;
//     map<string, string> m;
//     string buf1, buf2, buf3;
//     for(it=record.begin(); it!=record.end(); it++){
//         stringstream streams;
//         streams.str(*it);
//         streams >> buf1;
//         if(buf1 == "Enter"){
//             streams >> buf2;
//             streams >> buf3;
//             m.erase(buf2);
//             m.insert(make_pair(buf2,buf3));
//             vv.push_back(make_pair(buf1,buf2));
//         }else if(buf1 == "Leave"){
//             streams >> buf2;
//             vv.push_back(make_pair(buf1,buf2));
//         }else if(buf1 == "Change"){
//             streams >> buf2;
//             streams >> buf3;
//             m.erase(buf2);
//             m.insert(make_pair(buf2,buf3));
//         }
//     }
    vector<pair<string,string> >::iterator it2;
    for(it2=vv.begin();it2!=vv.end();it2++){
        string result = m.find(it2->second)->second;
        result += "님이";
        if(it2->first == "Enter")
            result += " 들어왔습니다.";
        else if(it2->first == "Leave")
            result += " 나갔습니다.";
        //cout << result << endl;
        answer.push_back(result);

    }
    return answer;
}
