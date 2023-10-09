const swap = (array, pos1, pos2) => {
    if (pos1 < 0 || pos1 >= array.length || pos2 < 0 || pos2 >= array.length) {
        console.error("Posições fora do intervalo válido.");
        return;
    }

    const temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
};

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], [array[i]]];
    }
    return array;
};

const bubbleSort = (array) => {
    const n = array.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j <n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
};

const selectionSort = (array) => {
    const n = array.length;
    
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }
    return array;
};

const quickSort = (array, low = 0, high = array.length - 1) => {
    if (low < high) {
        const pivotIndex = particionamento(array, low, high);
  
        quickSort(array, low, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, high);
    }
    return array;
};
  
const particionamento = (array, low, high, pivot = array[high]) => {
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];

    return i + 1;   
};