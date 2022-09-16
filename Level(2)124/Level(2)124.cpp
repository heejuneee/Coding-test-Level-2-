#include<iostream>
#include<vector>
#include <string>
using namespace std;

string change124(int no)
{
    string answer = "";
    string answer2 = "";
    int temp = no % 3;
    int mok = no / 3;
    if (temp == 0) answer.push_back('4');
    if (temp == 1) answer.push_back('1');
    if (temp == 2) answer.push_back('2');

    int na = 1;

//     while (1)
//     {

//         if (temp == 0) mok--;
//         if (mok == 0) break;
//         na *= 3;
//         temp = mok % 3;
//         mok /= 3;

//         if (temp == 0) answer.push_back('4');
//         if (temp == 1) answer.push_back('1');
//         if (temp == 2) answer.push_back('2');
//     }

//     for (int i = 0; i < answer.size(); i++)
//     {
//         answer2.push_back(answer[answer.size() - i - 1]);
//     }

//     return answer2;
// }
// int main()
// {
//     int testNo = 33;
//     string testAnswer = change124(testNo);

//     cout << testAnswer;
// }
