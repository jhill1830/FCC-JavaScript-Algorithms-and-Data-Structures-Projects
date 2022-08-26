/*
1 - Somehow have each alphabetical letter correspond to it numerical location in the alphabet ie. 1=a 2=b 3=c ... 26=z

2 - take the argument and convert each letter to its alphabetical numerical.

3 - Add 13 to that number

4 - make sure that after 26, the number sequence loops back to 1

5 - convert the new resulting number to its corresponding letter
*/

function rot13(str) {
    const alphabet = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    };

    let decoded = ''
    let decodeCipher = '';
//for loop to iterate through str and return the value based on the alphabet object
    for (let i = 0; i < str.length; i++){
        let cipher = alphabet[str[i].toLowerCase()];
        if (cipher == undefined) {
            decoded += str[i];
        } else {
            cipher += 13;
            if (cipher > 26) {cipher -= 26;}
            decodeCipher = getKey(alphabet, cipher);
            decoded += decodeCipher.toUpperCase();
        }

//        console.log(cipher);
//        console.log(decodeCipher);
    };
//    console.log(decoded);
    return decoded;
}

function getKey(obj, val) {
  return Object.keys(obj).find(key => obj[key] === val);
}

rot13("SERR PBQR PNZC");

/*
rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP

rot13("SERR CVMMN!") should decode to the string FREE PIZZA!

rot13("SERR YBIR?") should decode to the string FREE LOVE?

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/
