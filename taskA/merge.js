// Простой, но медленный вариант. Временная сложность - O((m + n) log (m + n)).
function mergeSlow(nums1, m, nums2, n) {
    // Слияние nums1 и nums2 в один массив.
    for (let i = m, j = 0; i < m + n; i++, j++) {
        nums1[i] = nums2[j];
    }
    
    // Сортировка полученного массива.
    nums1.sort((a, b) => a - b);
}

// Более быстрый вариант. Временная сложность - O(n + m)
function merge(nums1, numsOneLength, numsTwo, numsTwoLength) {
    let indexOne = numsOneLength - 1;
    let indexTwo = numsTwoLength - 1;
    /*
    Если индекс результирующего массива равен нулю, значит мы уже заполнили весь массив, и необходимо останавливать итерации. 
    Если индекс второго массива равен нулю, значит мы полностью проитерировались по второму массиву.
    Остаток первого массива расположен в правильном порядке, и мы можем спокойно заканчивать наш цикл.
    */
    for (let index = numsOneLength + numsTwoLength - 1; index >= 0, indexTwo >= 0; index--) {
        /*
        Проверяем, что не достигли начала первого массива.
        Если элемент первого массива больше элемента второго списка, то добавляем элемент первого списка.
        */
        if (nums1[indexOne] > numsTwo[indexTwo] && indexOne >= 0) {
            nums1[index] = nums1[indexOne];
            indexOne -= 1;
        // Иначе если элемент второго массива больше элемента первого списка, то добавляем элемент первого списка.
        } else {
            nums1[index] = numsTwo[indexTwo];
            indexTwo -= 1;
        }
        console.log(index);
        console.log(nums1[index]);
    }
}

const nums1 = [1, 2, 3, 0, 0];
const m = 3;
const nums2 = [2, 5];
const n = 2;

merge(nums1, m, nums2, n)
// mergeSlow(nums1, m, nums2, n)

console.log(nums1);