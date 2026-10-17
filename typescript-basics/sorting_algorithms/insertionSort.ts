export function insertionSort(arr:number[]):number[]{
    const result = [...arr];

    for(let i = 1; i < result.length; i++){
        const currentValue = result[i];
        let j = i - 1;

        while(j >= 0 && result[j] > currentValue){
            result[j+1] = result[j];
            j--;
        }
        result[j+1] = currentValue;
    }
    return result;
}