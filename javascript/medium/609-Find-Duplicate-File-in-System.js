/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  let hashTable = []
  const result = []
  for (let path of paths) {
    let fullPath = path.split(" ")
    let directoryPath = ""
    for (let i = 0; i < fullPath.length; i++) {
      if (i === 0) {
        directoryPath = fullPath[i]
      } else {
        let fileNameWithContents = fullPath[i].split("(")
        let fileName = fileNameWithContents[0]
        let directoryWithFileName = directoryPath + "/" + fileName
        let contents = fileNameWithContents[1].slice(0, fileNameWithContents[1].length - 1)
        if (!(contents in hashTable)) {
          hashTable[contents] = [directoryWithFileName]
        } else {
          hashTable[contents].push(directoryWithFileName)
        }
      }
    }
  }

  for (const value of Object.values(hashTable)) {
    if (value.length > 1) {
      result.push(value)
    }
  }
  return result
}

console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]))
