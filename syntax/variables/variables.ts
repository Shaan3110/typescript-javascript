let a: string = "check";

let b: number = 2;

interface ctype {
    h:string
}
let c: ctype = {
  h: "element",
};

let d: Array<number> = [1, 2, 3];

let e: boolean = false;

let f: [string, number] = ["check", 2]; //tuple

let g: string = c.h;

let h: unknown = "noideaabout"; //a variable whose type is not known it could be a string, object, boolean, undefined, or other types but not number

let i:null=null

let j:undefined=undefined

let k: Array<ctype> = [
    {
        h:"element1"
    }
]