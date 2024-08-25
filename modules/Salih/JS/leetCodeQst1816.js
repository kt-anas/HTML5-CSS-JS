function Truncate(s,k)
{
    let result = "";
    const str = s.split(' ');
    for (let i = 0; i < k; i++)
    {
        result += str[i]+" ";
    }
    return result.trimEnd();
}
console.log(Truncate("Hello how are you Contestant",4))

   
 