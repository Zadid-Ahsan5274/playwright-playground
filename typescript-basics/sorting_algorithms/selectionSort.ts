export function selectionSort(arr:number[]):number[]{
    const result = [...arr];

    for(let i = 0; i < result.length - 1; i++){
        let minimum_index = i;

        for(let j = i + 1; j < result.length; j++){
            if(result[j] < result[minimum_index]){
                minimum_index = j;
            }
        }

        if(minimum_index != i){
            const temp = result[i];
            result[i] = result[minimum_index];
            result[minimum_index] = temp;
        }
    }
    return result;
};