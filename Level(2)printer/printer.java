import java.util.ArrayList;
import java.util.List;

class Solution {
    public int solution(int[] priorities, int location) {
    List<Integer> list = new ArrayList<>();
    for (int priority : priorities) {
      list.add(priority);
    }

    int turn = 1;
    while (!list.isEmpty()) {
      final Integer j = list.get(0);
      if (list.stream().anyMatch(v -> j < v)) {
        list.add(list.remove(0));
      } else {
        if (location == 0) {
          return turn;
        }
        list.remove(0);
        turn++;
      }

      if (location > 0) {
        location--;
      } else {
        location = list.size() - 1;
      }
    }

    throw new IllegalArgumentException();
  }
}
