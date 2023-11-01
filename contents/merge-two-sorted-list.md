---
date: '2022-11-15'
title: '단일 연결 리스트 합치기'
---

## 문제

두 개의 정렬된 단일 연결 리스트 `list1`과 `list2`가 있습니다.
각각의 단일 연결 리스트를 하나의 단일 연결 리스트로 병합합니다.
연결 리스트는 첫 두 개의 노드를 연결해야 하며, 병합된 단일 연결 리스트를 반환해야 합니다.
</br>

</br>

#### 예시 1

![알고리즘 예시 이미지](images/merge.png)

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

#### 예시 2

```
Input: list1 = [], list2 = []
Output: []
```

#### 예시 3

```
Input: list1 = [], list2 = [0]
Output: [0]
```

#### 제약사항

- 연결 리스트의 노드 갯수의 범위는 `[0, 50]`입니다.
- 노드의 value의 범위는 `-100 <= Node.value <= 100`입니다.
- `list1`과 `list2`는 모두 감소하지 않는 순서(오름차순)로 정렬됩니다.

## 접근

### 예시를 보고 조건 파악하기

1. `예시 2`를 통해 두 리스트가 비어 있으면 빈 리스트가 반환되어야 한다는 것을 알 수 있습니다.
2. `예시 3`을 통해 둘 중 한 개의 리스트가 비어 있으면 값이 존재하는 리스트가 되어야 한다는 것을 알 수 있습니다.
3. `예시 1`과 `제약사항`을 통해 두 리스트가 병합될 때 어떤 조건으로 병합되어야 하는지를 알 수 있습니다.

### 풀이

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  // 둘 중 하나의 리스트가 빈 값인 경우 다른 리스트를 반환하도록 합니다.
  //not(!) 연산자를 이용해 빈 값인 리스트에 대한 조건을 설정했습니다.
}
```

위 조건을 만족하지 않는 경우 리스트의 값들을 비교하여 하나의 새로운 리스트가 결과로 반환되어야 하므로 각 리스트의 값에 대한 변수(firstValue, secondValue)와 결과로 반환될 새로운 리스트에 대한 변수(resultNode)를 선언한 뒤, 값을 서로 비교하여 상대적으로 큰 경우와 그렇지 않은 경우에 대한 조건을 설정했습니다.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let firstValue = list1.val;
  let secondValue = list2.val;
  let resultNode;

  // 예시 1의 output을 통해 리스트의 값들은 오름차순으로 정렬되는 것을 알 수 있습니다.
  // 따라서 firtstValue가 secondValue보다 작을 때라는 조건을 설정했습니다.
  if (firstValue < secondValue) {
  } else {
  }
}
```

설정한 조건을 만족할 때 resultNode에 새로운 노드로 추가되도록 합니다. 그리고 resultNode에 추가된 노드의 다음 노드는 재귀를 이용하여 list1의 다음 노드와 list2의 현재 노드를 비교하도록 합니다. 만약 이 상황에서 설정한 조건을 만족하지 않는다면 secondNode가 resultNode에 새로운 노드로 추가되도록 하고, 그 다음 노드로는 반대로 list2의 다음 노드와 list1의 현재 노드를 재귀를 이용하여 비교하도록 합니다.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let firstValue = list1.val;
  let secondValue = list2.val;
  let resultNode;

  if (firstValue < secondValue) {
    resultNode = new ListNode(firstValue);
    resultNode.next = mergeTwoLists(list1.next, list2);
  } else {
    resultNode = new ListNode(secondValue);
    resultNode.next = mergeTwoLists(list1, list2.next);
  }
  return resultNode;
}
```

> 출처: [21. Merge Two Sorted Lists (LeetCode)](https://leetcode.com/problems/merge-two-sorted-lists/)
