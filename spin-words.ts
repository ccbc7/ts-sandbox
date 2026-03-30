// 1つ以上の単語からなる文字列を受け取り、その文字列をそのまま返す関数を作成してください。
// ただし、5文字以上の単語については、文字列の順序を逆にして返すようにしてください（このカタの名前と同じように）。
// 渡される文字列は、文字とスペースのみで構成されます。スペースが含まれるのは、複数の単語が存在する場合のみです。

// 例：

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"
    
export function spinWords(words: string): string {
    return words
        .split(" ")
        .map(word =>
            word.length >= 5
                ? word.split("").reverse().join("") //splitで一度配列にしてreverseで逆順にしてjoinで結合
                : word
        )
        .join(" ") //joinでスペースで配列を結合して文字列を返す
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));