export class ListaProdutoDto{
    static filter(arg0: (element: any) => any) {
        throw new Error("Method not implemented.");
    }
    constructor(
        readonly Id:string,
        readonly Nome: string,
    ){}
}