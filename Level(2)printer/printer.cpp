#include <string>
#include <queue>
#include <iostream>
#include <vector>

using namespace std;

int solution(vector<int> priorities, int location) {
    int answer = 0;
    queue <pair<int,int>>q;
    priority_queue <int>pq;
    for(int i = 0; i < priorities.size(); i++){pq.push(priorities[i]); q.push(make_pair(i, priorities[i]));}
