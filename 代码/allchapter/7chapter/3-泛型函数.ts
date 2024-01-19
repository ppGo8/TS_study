/**
 * 快速排序算法
 * @param arr 可以排序数字数组、字符串数组
 * @returns 
 */
export default function quickSort<E>(arr: Array<E>): Array<E> {
  if (arr.length <= 1) {
      return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const left:Array<E> = [];
  const right:Array<E> = [];

  for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) {
          continue;
      }

      if (arr[i] < pivot) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// 示例1：数字数组
// const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// const sortedArray = quickSort(unsortedArray);
// console.log('Unsorted Array:', unsortedArray);
// console.log('Sorted Array:', sortedArray);

// 实例2: 字符串数组
// const unsorteStrArr = ['bac', 'abc', 'cfd', 'xyz'];
// const sortedStrArr = quickSort(unsorteStrArr);
// console.log('Unsorted Array:', unsorteStrArr);
// console.log('Sorted Array:', sortedStrArr);
