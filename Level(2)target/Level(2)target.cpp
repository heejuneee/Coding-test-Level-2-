#include <string>
#include <vector>

using namespace std;

bool promising(int depth, const vector<int> &numbers, int search, int target) {
    int lastSum = 0;
    for (int i = depth; i < numbers.size(); i++) {
        lastSum += numbers[i];
    }

    if (search + lastSum < target || search - lastSum > target) {
        return false;
    }
    else return true;
}

// void searchNum(int &answer, int depth, const vector<int> &numbers, int search, int target) {
//     if (promising(depth, numbers, search, target)) {
//         if (depth == numbers.size()) {
//             answer++;
//             return;
//         }

//         search += numbers[depth];
//         searchNum(answer, depth + 1, numbers, search, target);

//         search -= (2 * numbers[depth]);
//         searchNum(answer, depth + 1, numbers, search, target);
//     }
// }

// int solution(vector<int> numbers, int target) {

//     int answer = 0;

//     searchNum(answer, 0, numbers, 0, target);

//     return answer;
// }
