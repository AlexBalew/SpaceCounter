export const apiController: ApiControllerType={
    getStartNumbers(value: string){
       return  localStorage.getItem(value)
    }
}
type ApiControllerType={
    getStartNumbers: (value: string)=> string|null
}