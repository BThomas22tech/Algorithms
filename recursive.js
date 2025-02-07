function count(n){
    let str = ""
    if (n <= 0) return
    str += count(n-1)
    str += n


}

count(10)